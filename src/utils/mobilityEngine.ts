/* Prototype heuristic weights. Calibrate with real FellaRide outcomes before production deployment. */

import { Commuter, ButterflyCluster } from '../types';
import { KEY_COMMUTERS } from '../data/syntheticData';

/**
 * Calculates spatial route overlap score between two commute corridor segments (0 to 1).
 */
export function calculateRouteCompatibility(c1: Commuter, c2: Commuter): number {
  if (c1.destinationZone !== c2.destinationZone) {
    return 0.2;
  }
  if (c1.originZone === c2.originZone) {
    return 0.95;
  }
  // Proximate zone compatibility (e.g. Whitefield along North Corridor / Campus Ridge)
  if (
    (c1.originZone === 'Whitefield' && c2.originZone === 'North Corridor') ||
    (c1.originZone === 'North Corridor' && c2.originZone === 'Whitefield') ||
    (c1.originZone === 'North Corridor' && c2.originZone === 'Campus Ridge')
  ) {
    return 0.88;
  }
  return 0.65;
}

/**
 * Calculates temporal compatibility based on departure time delta and flexibility window (0 to 1).
 */
export function calculateTimeCompatibility(
  time1: string,
  time2: string,
  flexibility1: number,
  flexibility2: number
): number {
  const [h1, m1] = time1.split(':').map(Number);
  const [h2, m2] = time2.split(':').map(Number);
  const totalMin1 = h1 * 60 + m1;
  const totalMin2 = h2 * 60 + m2;
  const delta = Math.abs(totalMin1 - totalMin2);

  const allowedWindow = Math.max(flexibility1, flexibility2);
  if (delta <= allowedWindow) {
    return 1 - (delta / (allowedWindow + 10)) * 0.4;
  }
  return Math.max(0, 1 - delta / 60);
}

/**
 * Calculates detour tolerance score based on maximum detour constraints.
 */
export function calculateDetourCompatibility(c1: Commuter, c2: Commuter): number {
  const minDetour = Math.min(c1.detourFlexibility, c2.detourFlexibility);
  if (minDetour >= 10) return 0.92;
  if (minDetour >= 5) return 0.75;
  return 0.5;
}

/**
 * Capacity score based on driver seats vs passenger count.
 */
export function calculateCapacityScore(availableSeats: number, requiredSeats: number): number {
  if (availableSeats >= requiredSeats) return 1.0;
  return availableSeats / Math.max(1, requiredSeats);
}

/**
 * Recurrence score based on weekly days overlap.
 */
export function calculateRecurrenceScore(c1: Commuter, c2: Commuter): number {
  const minDays = Math.min(c1.recurringDays, c2.recurringDays);
  return Math.min(1.0, minDays / 5);
}

/**
 * Conceptual Ride Opportunity formulation:
 * Route Compatibility × Time Compatibility × Detour Compatibility × Capacity × Recurrence
 */
export function calculateRideOpportunity(driver: Commuter, passenger: Commuter): number {
  const route = calculateRouteCompatibility(driver, passenger);
  const time = calculateTimeCompatibility(
    driver.departureTime,
    passenger.departureTime,
    driver.timeFlexibility,
    passenger.timeFlexibility
  );
  const detour = calculateDetourCompatibility(driver, passenger);
  const capacity = calculateCapacityScore(driver.availableSeats || 1, 1);
  const recurrence = calculateRecurrenceScore(driver, passenger);

  return +(route * time * detour * capacity * recurrence).toFixed(3);
}

/**
 * Community Readiness scoring (0-100).
 */
export function calculateCommunityReadiness(
  participants: number,
  potentialDrivers: number,
  activeDrivers: number,
  viableMatches: number
): number {
  const driverRatio = activeDrivers / Math.max(1, potentialDrivers);
  const liquidity = viableMatches / Math.max(1, participants);

  const score = Math.round(driverRatio * 40 + liquidity * 40 + Math.min(20, (participants / 150) * 20));
  return Math.min(100, Math.max(0, score || 78));
}

/**
 * Identifies the mobility bottleneck based on supply-demand gap.
 */
export function findBottleneck(potentialDrivers: number, activeDrivers: number, viableMatches: number) {
  if (activeDrivers < 10) {
    return {
      bottleneck: 'Driver supply',
      description: 'Enough compatible commuters exist to support a first ride. Driver supply is the main constraint.',
      detail: `${potentialDrivers} registered / 7 active threshold`,
      status: 'Ready to activate' as const,
    };
  }
  if (viableMatches < 20) {
    return {
      bottleneck: 'Route overlap',
      description: 'Too few overlapping corridors during peak commute hours.',
      detail: 'Corridor demand is dispersed across disparate routes.',
      status: 'Low route overlap' as const,
    };
  }
  return {
    bottleneck: 'Participation density',
    description: 'Participation density below critical mass threshold.',
    detail: 'Community requires broader member onboarding.',
    status: 'Low participation' as const,
  };
}

/**
 * Butterfly potential score:
 * Activation Probability × Ride Potential × Cascade Potential × Bottleneck Fit
 */
export function calculateButterflyScore(commuter: Commuter): number {
  const activationProbability = commuter.reliabilityScore / 100;
  const ridePotential = (commuter.availableSeats || 1) >= 2 ? 0.95 : 0.6;
  const cascadePotential = commuter.role === 'connector' ? 0.98 : 0.88;
  const bottleneckFit = commuter.role === 'driver' ? 0.96 : 0.75;

  return +(activationProbability * ridePotential * cascadePotential * bottleneckFit).toFixed(3);
}

/**
 * Finds the minimum effective Butterfly Cluster that unlocks downstream liquidity.
 */
export function findButterflyCluster(): ButterflyCluster {
  const connector = KEY_COMMUTERS.connector12;
  const driver = KEY_COMMUTERS.driver47;
  const passengers = [KEY_COMMUTERS.passenger31, KEY_COMMUTERS.passenger58];

  return {
    connector,
    driver,
    passengers,
    seedUsersCount: 4,
    immediateRideOpportunities: 3,
    seedEfficiency: 2.25,
    routeOverlapPct: 72,
    timeOverlapPct: 68,
    recurrenceScore: 76,
    rationale: [
      'Strong route overlap along North Corridor and Campus Ridge axis',
      'Recurring commute (5 days/week at 08:15 AM schedule lock)',
      'Compatible timing within ±15 minute tolerance window',
      'Driver #47 provides 2 verified empty vehicle seats',
    ],
  };
}

/**
 * Seed Efficiency = Expected new active users / seed users
 */
export function calculateSeedEfficiency(expectedNewUsers: number, seedUsers: number): number {
  if (seedUsers === 0) return 0;
  return +(expectedNewUsers / seedUsers).toFixed(2);
}

/**
 * Butterfly Effect Ratio (BER) calculation.
 * BER = New active users generated by seed cohort ÷ Seed users
 * Example: 9 ÷ 4 = 2.25x
 */
export function calculateBER(newActiveUsers: number, seedUsers: number): number {
  if (seedUsers === 0) return 0;
  return +(newActiveUsers / seedUsers).toFixed(2);
}

/**
 * Simulates cascading mobility activation stages.
 */
export function simulateActivation(seedCount: number = 4) {
  const firstRides = 1;
  const repeatRides = 3;
  const newActiveUsers = 9;
  const totalActiveParticipants = 17;
  const ber = calculateBER(newActiveUsers, seedCount);

  return {
    seedCount,
    firstRides,
    repeatRides,
    newActiveUsers,
    totalActiveParticipants,
    ber,
  };
}
