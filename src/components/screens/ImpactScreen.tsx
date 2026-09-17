import React, { useState } from 'react';
import { ScreenType } from '../../types';
import { SYNTHETIC_DISCLAIMER } from '../../data/syntheticData';

interface ImpactScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenExportBriefing: () => void;
}

interface Scenario {
  id: string;
  name: string;
  seedUsers: number;
  firstRides: number;
  repeatRides: number;
  newActiveUsers: number;
  totalParticipants: number;
  ber: string;
  description: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'base',
    name: 'Scenario 1 (Base Seed) — North Corridor Quad',
    seedUsers: 4,
    firstRides: 1,
    repeatRides: 3,
    newActiveUsers: 9,
    totalParticipants: 17,
    ber: '2.25x',
    description: '4 activated members generated 9 new active users.',
  },
  {
    id: 'expanded',
    name: 'Scenario 2 (Campus Ridge Expansion)',
    seedUsers: 5,
    firstRides: 2,
    repeatRides: 6,
    newActiveUsers: 14,
    totalParticipants: 25,
    ber: '2.80x',
    description: '5 activated members generated 14 new active users.',
  },
  {
    id: 'conservative',
    name: 'Scenario 3 (Conservative Baseline)',
    seedUsers: 4,
    firstRides: 1,
    repeatRides: 2,
    newActiveUsers: 6,
    totalParticipants: 12,
    ber: '1.50x',
    description: '4 activated members generated 6 new active users.',
  }
];

export const ImpactScreen: React.FC<ImpactScreenProps> = ({
  onNavigate: _onNavigate,
  onOpenExportBriefing,
}) => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const currentScenario = SCENARIOS[activeScenarioIdx];

  const handleNextScenario = () => {
    setActiveScenarioIdx((prev) => (prev + 1) % SCENARIOS.length);
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 py-4 max-w-xl lg:max-w-5xl xl:max-w-6xl mx-auto space-y-6">
      {/* Header Block */}
      <div className="flex flex-col space-y-1">
        <div className="inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded bg-[#dde3ed] text-[#3d4a42] font-mono text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#006948] animate-pulse"></span>
          <span>Illustrative prototype data</span>
        </div>
        <span className="font-mono text-[11px] uppercase font-semibold text-[#006948] tracking-wider pt-0.5">
          What happened?
        </span>
        <h1 className="text-[24px] sm:text-[28px] text-[#161c23] tracking-tight font-semibold leading-tight">
          The Butterfly Effect
        </h1>
        <p className="text-[14px] sm:text-[15px] text-[#3d4a42]">
          Small intervention. Growing network.
        </p>
      </div>

      {/* Responsive 2-Column Grid on Laptop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Multiplier KPI, Corridor Photo & Action Controls */}
        <div className="lg:col-span-5 space-y-4">
          {/* Cascading Impact KPI Box */}
          <div className="p-5 rounded-xl bg-[#006948] text-white shadow-xs flex flex-col gap-1.5 border border-[#00855d]">
            <div className="flex items-center justify-between text-[#85f8c4]">
              <span className="font-mono text-[11px] uppercase font-semibold tracking-wider">
                BUTTERFLY EFFECT RATIO (BER)
              </span>
              <span className="material-symbols-outlined text-[20px]">scatter_plot</span>
            </div>

            <div className="flex items-baseline gap-2 pt-0.5">
              <span className="font-mono text-[36px] font-bold text-white leading-none">
                {currentScenario.ber}
              </span>
              <span className="text-[15px] text-[#85f8c4] font-medium">Multiplier</span>
            </div>

            <p className="text-[13px] text-white/95 font-medium leading-snug">
              {currentScenario.description}
            </p>

            <div className="pt-2.5 mt-1 border-t border-white/20 text-[11px] font-mono text-[#85f8c4]">
              BER = New active users ({currentScenario.newActiveUsers}) ÷ Seed users ({currentScenario.seedUsers}) = {currentScenario.ber}
            </div>
          </div>

          {/* Corridor Proof of Action Photo */}
          <div className="flex flex-col gap-2 p-4 rounded-xl bg-white shadow-xs border border-[#bccac0]/30">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-semibold text-[#161c23]">
                Corridor Proof of Action
              </span>
              <span className="font-mono text-[11px] text-[#6d7a72]">
                North Transit Hub
              </span>
            </div>

            <div className="relative w-full h-44 rounded-lg overflow-hidden mt-1 bg-[#161c23]">
              <img
                className="w-full h-full object-cover"
                alt="University Research Park Transit Corridor"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClzFe7bvwf50X2UaQpob6kpkP93MrWU24VNUIOtdDHIbhCvB_ZC_rtT-krB8iiu1nHJuTNmi-EXNejjghH0sd8i44hFFy8kEDjQUtt1UcrxGx7dRBESINx62HvvVATgVJQlpE_8BoXCCRxPRdIBVaqkMLykf4_kB3Wzyb9rCYN-Wyekuf1V6OEWGZptq10DU98F6EN1brWof2bQvfHCZS9TyfL0QPYO8fygmQ2cw3oZ0RQS8_SYA6Jzw"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161c23]/85 via-[#161c23]/30 to-transparent flex items-end p-3">
                <div className="flex items-center justify-between w-full text-white">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#85f8c4] font-semibold uppercase tracking-wider">
                      Active Commute Corridor
                    </span>
                    <span className="text-[14px] font-semibold leading-tight">
                      Zone 4: Engineering Quad Access
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#85f8c4] text-[22px]">
                    verified_user
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <div className="flex flex-col gap-2.5 pt-1">
            <button
              onClick={handleNextScenario}
              className="w-full h-11 px-4 rounded-lg bg-[#161c23] text-white flex items-center justify-center gap-2 shadow-xs hover:bg-[#2b3139] active:scale-[0.98] transition-all cursor-pointer font-medium text-[13px]"
            >
              <span className="material-symbols-outlined text-[18px]">autorenew</span>
              <span>Switch: {currentScenario.name.split('—')[0]}</span>
            </button>

            <button
              onClick={onOpenExportBriefing}
              className="w-full h-11 px-4 rounded-lg bg-white text-[#161c23] flex items-center justify-center gap-2 shadow-xs border border-[#bccac0]/30 hover:bg-[#eef4fe] active:scale-[0.98] transition-all cursor-pointer font-medium text-[13px]"
            >
              <span className="material-symbols-outlined text-[18px] text-[#6d7a72]">
                picture_as_pdf
              </span>
              <span>Export Activation Briefing (PDF)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Cascading Growth Sequence (Seed to Scale) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-col gap-2.5 p-5 rounded-xl bg-white shadow-xs border border-[#bccac0]/30">
            <div className="flex items-center justify-between border-b border-[#e9eef9] pb-3">
              <span className="text-[16px] font-semibold text-[#161c23]">
                Cascading Growth Sequence
              </span>
              <span className="font-mono text-[11px] text-[#006948] font-semibold bg-[#eef4fe] px-2 py-0.5 rounded border border-[#bccac0]/25">
                Seed to Scale
              </span>
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              {/* Step 1: 4 Seed Members */}
              <div className="p-3 rounded-lg bg-[#eef4fe] flex items-center justify-between border border-[#bccac0]/20">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#006948] text-white flex items-center justify-center font-mono font-bold text-[12px]">
                    1
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#161c23]">
                      {currentScenario.seedUsers} Seed Members
                    </span>
                    <span className="text-[11px] text-[#6d7a72] font-mono">
                      Targeted campus node activation
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#006948] text-[20px]">group</span>
              </div>

              {/* Downward Arrow */}
              <div className="flex justify-center py-0.5">
                <span className="material-symbols-outlined text-[#bccac0] text-[16px]">
                  arrow_downward
                </span>
              </div>

              {/* Step 2: 1 First Ride */}
              <div className="p-3 rounded-lg bg-[#eef4fe] flex items-center justify-between border border-[#bccac0]/20">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#dde3ed] text-[#161c23] flex items-center justify-center font-mono font-bold text-[12px]">
                    2
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#161c23]">
                      {currentScenario.firstRides} First Ride
                    </span>
                    <span className="text-[11px] text-[#6d7a72] font-mono">
                      Initial corridor commute completed
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#006948] text-[20px]">
                  directions_car
                </span>
              </div>

              {/* Downward Arrow */}
              <div className="flex justify-center py-0.5">
                <span className="material-symbols-outlined text-[#bccac0] text-[16px]">
                  arrow_downward
                </span>
              </div>

              {/* Step 3: 3 Repeat Rides */}
              <div className="p-3 rounded-lg bg-[#eef4fe] flex items-center justify-between border border-[#bccac0]/20">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#dde3ed] text-[#161c23] flex items-center justify-center font-mono font-bold text-[12px]">
                    3
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#161c23]">
                      {currentScenario.repeatRides} Repeat Rides
                    </span>
                    <span className="text-[11px] text-[#6d7a72] font-mono">
                      Habit formation &amp; routine verified
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#006948] text-[20px]">sync</span>
              </div>

              {/* Downward Arrow */}
              <div className="flex justify-center py-0.5">
                <span className="material-symbols-outlined text-[#bccac0] text-[16px]">
                  arrow_downward
                </span>
              </div>

              {/* Step 4: 9 New Active Users (Highlighted) */}
              <div className="p-3.5 rounded-lg bg-[#85f8c4]/40 border-2 border-[#006948]/60 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#006948] text-white flex items-center justify-center font-mono font-bold text-[12px]">
                    4
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold text-[#002114]">
                      {currentScenario.newActiveUsers} New Active Users
                    </span>
                    <span className="text-[11px] text-[#005137] font-mono font-medium">
                      Organic referrals and peer joins
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#006948] text-[22px]">
                  person_add
                </span>
              </div>

              {/* Downward Arrow */}
              <div className="flex justify-center py-0.5">
                <span className="material-symbols-outlined text-[#bccac0] text-[16px]">
                  arrow_downward
                </span>
              </div>

              {/* Step 5: Active Participants */}
              <div className="p-3 rounded-lg bg-[#eef4fe] flex items-center justify-between border border-[#bccac0]/20">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#dde3ed] text-[#161c23] flex items-center justify-center font-mono font-bold text-[12px]">
                    5
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#161c23]">
                      {currentScenario.totalParticipants} Active Participants
                    </span>
                    <span className="text-[11px] text-[#6d7a72] font-mono">
                      Corridor network equilibrium reached
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#006948] text-[20px]">hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Synthetic Data Disclaimer Footer */}
      <div className="text-center pb-6 text-[#6d7a72] font-mono text-[10px] leading-relaxed">
        {SYNTHETIC_DISCLAIMER}
      </div>
    </div>
  );
};
