import React from 'react';
import { CommunityHub, ScreenType } from '../../types';
import { SYNTHETIC_DISCLAIMER } from '../../data/syntheticData';

interface OverviewScreenProps {
  community: CommunityHub;
  otherHubs: CommunityHub[];
  onNavigate: (screen: ScreenType) => void;
  onSelectCommunity: (communityId: string) => void;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({
  community,
  otherHubs,
  onNavigate,
  onSelectCommunity,
}) => {
  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 py-4 max-w-xl lg:max-w-5xl xl:max-w-6xl mx-auto space-y-6">
      {/* Header Context Area */}
      <section className="space-y-1">
        <div className="flex items-center justify-between text-[#6d7a72] font-mono text-[11px] tracking-wide">
          <span className="uppercase font-medium">COMMUNITY MOBILITY NETWORK</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006948] animate-pulse"></span>
            Updated 4m ago
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h1 className="text-[24px] sm:text-[28px] text-[#161c23] tracking-tight font-semibold">
            Priority Opportunity
          </h1>
          <span className="font-mono text-[12px] text-[#6d7a72]">
            Targeting seed node for corridor activation
          </span>
        </div>
      </section>

      {/* Responsive Grid: Single column on mobile/tablet, 2-column on laptop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Dominant Hero / Primary Opportunity Card */}
        <div className="lg:col-span-7 space-y-5">
          <article className="bg-white rounded-xl p-5 sm:p-6 shadow-xs space-y-4 border border-[#bccac0]/30 transition-all hover:border-[#bccac0]/50">
            {/* Answer / Status */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#85f8c4] text-[#002114] font-mono text-[11px] font-semibold tracking-wide uppercase">
                  {community.status}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-[11px] text-[#6d7a72] uppercase font-medium">
                    Readiness
                  </span>
                  <span className="font-mono text-[22px] font-bold text-[#006948] leading-none ml-1">
                    {community.readinessScore}
                  </span>
                  <span className="font-mono text-[11px] text-[#6d7a72]">/100</span>
                </div>
              </div>
              <h2 className="text-[22px] sm:text-[24px] text-[#161c23] tracking-tight font-semibold pt-1 leading-snug">
                {community.name} is ready to activate.
              </h2>
            </div>

            {/* Key Rationale */}
            <p className="text-[14px] sm:text-[15px] text-[#3d4a42] leading-relaxed">
              Enough compatible commuters exist to support a first ride. Driver supply is the main constraint.
            </p>

            {/* Supporting Evidence Strip */}
            <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#eef4fe] rounded-xl text-center border border-[#bccac0]/20">
              <div className="space-y-0.5">
                <span className="block font-mono text-[18px] sm:text-[20px] text-[#006948] font-bold">
                  {community.viableMatches}
                </span>
                <span className="font-mono text-[11px] text-[#3d4a42] block">
                  viable matches
                </span>
              </div>
              <div className="space-y-0.5 border-x border-[#bccac0]/30 px-1">
                <span className="block font-mono text-[18px] sm:text-[20px] text-[#161c23] font-bold">
                  {community.potentialDrivers}
                </span>
                <span className="font-mono text-[11px] text-[#3d4a42] block">
                  potential drivers
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="block font-mono text-[18px] sm:text-[20px] text-[#161c23] font-bold">
                  {community.availableSeats}
                </span>
                <span className="font-mono text-[11px] text-[#3d4a42] block">
                  available seats
                </span>
              </div>
            </div>

            {/* Primary Bottleneck Indicator */}
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#eef4fe] border border-[#bccac0]/25 text-[#3d4a42]">
              <span className="material-symbols-outlined text-[20px] text-[#b15f00] shrink-0">
                report_problem
              </span>
              <span className="text-[13px] leading-tight">
                <strong className="font-semibold text-[#161c23]">Primary Bottleneck:</strong>{' '}
                {community.primaryBottleneck} ({community.bottleneckDetail}).
              </span>
            </div>

            {/* Dominant Primary CTA */}
            <button
              onClick={() => onNavigate('intelligence')}
              className="w-full h-11 sm:h-12 px-5 rounded-lg bg-[#006948] text-white flex items-center justify-center gap-2 text-[14px] sm:text-[15px] font-semibold shadow-xs hover:bg-[#00855d] active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Analyze community</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </article>

          {/* Network Activation Context (Extra value on Laptop) */}
          <div className="hidden lg:flex items-center justify-between p-4 bg-white rounded-xl border border-[#bccac0]/25 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#eef4fe] text-[#006948] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#161c23]">
                  Corridor Density Threshold Met
                </div>
                <div className="text-[12px] text-[#6d7a72] font-mono">
                  14 recurring commute paths identified along North Transit Hub
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('intelligence')}
              className="font-mono text-[12px] font-semibold text-[#006948] hover:underline cursor-pointer"
            >
              View Corridor →
            </button>
          </div>
        </div>

        {/* Right Column: Other Monitored Hubs & Diagnostic Summary */}
        <div className="lg:col-span-5 space-y-5">
          {/* Other Monitored Hubs */}
          <section className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6d7a72] font-semibold">
                Other Monitored Hubs
              </span>
              <span className="font-mono text-[11px] text-[#6d7a72]">
                {otherHubs.length} Hubs Monitored
              </span>
            </div>

            <div className="bg-white rounded-xl shadow-xs border border-[#bccac0]/30 divide-y divide-[#e9eef9] overflow-hidden">
              {otherHubs.map((hub) => (
                <div
                  key={hub.id}
                  className="p-3.5 flex items-center justify-between gap-3 hover:bg-[#eef4fe]/50 transition-colors"
                >
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[14px] text-[#161c23] font-semibold truncate">
                        {hub.name}
                      </h3>
                      <span className="font-mono text-[12px] text-[#6d7a72] font-semibold">
                        {hub.readinessScore}/100
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-[#b15f00] font-medium">
                      {hub.status}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onSelectCommunity(hub.id);
                      onNavigate('intelligence');
                    }}
                    className="h-8 px-2.5 rounded bg-[#e9eef9] text-[#161c23] font-mono text-[11px] font-medium flex items-center gap-1 hover:bg-[#dde3ed] transition-colors shrink-0 cursor-pointer"
                  >
                    <span>Inspect</span>
                    <span className="material-symbols-outlined text-[15px] text-[#6d7a72]">
                      chevron_right
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Diagnostic Key Indicator Card */}
          <div className="bg-white rounded-xl p-4 shadow-xs border border-[#bccac0]/30 space-y-2.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#6d7a72] font-semibold block">
              B-FLARE Engine Verdict
            </span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#006948]">
                check_circle
              </span>
              <span className="text-[13px] font-semibold text-[#161c23]">
                Driver #47 Seed Candidate Verified
              </span>
            </div>
            <p className="text-[12px] text-[#3d4a42] leading-relaxed">
              Activation model forecasts 2.25× multiplier across 9 new active users upon primary seed corridor unlocking.
            </p>
          </div>
        </div>
      </div>

      {/* Synthetic Data Disclaimer Footer */}
      <div className="text-center pt-2 pb-6 text-[#6d7a72] font-mono text-[10px] leading-relaxed">
        {SYNTHETIC_DISCLAIMER}
      </div>
    </div>
  );
};
