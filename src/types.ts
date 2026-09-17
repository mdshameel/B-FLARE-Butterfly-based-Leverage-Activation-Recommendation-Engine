export type ScreenType = 'overview' | 'intelligence' | 'butterfly' | 'intervention' | 'impact';

export type CommuterRole = 'driver' | 'passenger' | 'connector';

export interface Commuter {
  id: string;
  codeName: string;
  role: CommuterRole;
  originZone: string;
  destinationZone: string;
  departureTime: string;
  timeFlexibility: number; // in minutes
  detourFlexibility: number; // in minutes
  availableSeats?: number;
  recurringDays: number; // days per week
  reliabilityScore: number; // 0 - 100
  corridor: string;
}

export interface CommunityHub {
  id: string;
  name: string;
  totalMembers: number;
  mobilityParticipants: number;
  readinessScore: number;
  status: 'Ready to activate' | 'Low participation' | 'Low route overlap';
  primaryBottleneck: string;
  bottleneckDetail: string;
  viableMatches: number;
  potentialDrivers: number;
  activeDrivers: number;
  availableSeats: number;
  recurringCorridors: number;
}

export interface ButterflyCluster {
  connector: Commuter;
  driver: Commuter;
  passengers: Commuter[];
  seedUsersCount: number;
  immediateRideOpportunities: number;
  seedEfficiency: number; // e.g. 2.25
  routeOverlapPct: number;
  timeOverlapPct: number;
  recurrenceScore: number;
  rationale: string[];
}

export type InterventionStatus = 'idle' | 'sending' | 'sent' | 'accepted' | 'ride_created';

export interface ImpactProgressionStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  count: number;
  icon: string;
  isHighlight?: boolean;
}
