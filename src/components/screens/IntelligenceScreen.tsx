import React from 'react';
import { CommunityHub, ScreenType } from '../../types';
import { SYNTHETIC_DISCLAIMER } from '../../data/syntheticData';

interface IntelligenceScreenProps {
  community: CommunityHub;
  onNavigate: (screen: ScreenType) => void;
  onSelectDriver: (driverId: string) => void;
}

export const IntelligenceScreen: React.FC<IntelligenceScreenProps> = ({
  community,
  onNavigate,
  onSelectDriver,
}) => {
  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 py-4 max-w-xl lg:max-w-5xl xl:max-w-6xl mx-auto space-y-6">
      {/* Responsive Grid: 1 column on mobile/tablet, 2 columns on laptop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Diagnostic & Evidence */}
        <div className="lg:col-span-6 space-y-4">
          {/* 1. Readiness Diagnostic Header */}
      <section className="bg-white p-5 rounded-xl shadow-xs space-y-3.5 border border-[#bccac0]/30">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#6d7a72] font-semibold">
            {community.name} Diagnostic
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#85f8c4] text-[#005137] font-mono text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006948]"></span>
            {community.status}
          </span>
        </div>

        <div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#b15f00] font-semibold">
            Primary Question
          </span>
          <h1 className="text-[20px] text-[#161c23] tracking-tight font-semibold mt-0.5">
            What's stopping this community from growing?
          </h1>
        </div>

        {/* Big Answer Box */}
        <div className="p-3.5 bg-[#eef4fe] rounded-lg space-y-1.5 border border-[#bccac0]/25">
          <div className="flex items-center gap-1.5 text-[#b15f00]">
            <span className="material-symbols-outlined text-[18px]">warning</span>
            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
              Big Answer
            </span>
          </div>
          <h2 className="text-[16px] text-[#161c23] font-semibold leading-tight">
            Driver supply is the bottleneck.
          </h2>
          <p className="text-[13px] text-[#3d4a42] leading-relaxed">
            There are enough potential passengers and route-compatible demand, but too few active drivers to reliably start the community.
          </p>
        </div>

        {/* 3 Metric Counts */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#e9eef9]">
          <div className="flex flex-col">
            <span className="font-mono text-[11px] text-[#6d7a72]">Potential Drivers</span>
            <span className="font-mono text-[18px] text-[#161c23] font-bold">
              {community.potentialDrivers}
            </span>
          </div>
          <div className="flex flex-col border-l border-[#e9eef9] pl-3">
            <span className="font-mono text-[11px] text-[#6d7a72]">Highly Compatible</span>
            <span className="font-mono text-[18px] text-[#006948] font-bold">
              {community.activeDrivers}
            </span>
          </div>
          <div className="flex flex-col border-l border-[#e9eef9] pl-3">
            <span className="font-mono text-[11px] text-[#6d7a72]">Available Seats</span>
            <span className="font-mono text-[18px] text-[#161c23] font-bold">
              {community.availableSeats}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Compatibility Evidence */}
      <section className="bg-white p-5 rounded-xl shadow-xs space-y-4 border border-[#bccac0]/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#161c23]">tune</span>
            <h2 className="text-[16px] text-[#161c23] font-semibold">
              Compatibility Evidence
            </h2>
          </div>
          <span className="font-mono text-[12px] text-[#6d7a72]">
            {community.mobilityParticipants} Commuters
          </span>
        </div>

        <div className="space-y-3">
          {/* Route overlap */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-[#161c23]">Route overlap</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#006948]">High</span>
                <span className="font-mono font-semibold text-[#161c23]">(72%)</span>
              </div>
            </div>
            <div className="w-full bg-[#e3e8f3] h-2 rounded-full overflow-hidden">
              <div className="bg-[#006948] h-full rounded-full transition-all duration-700" style={{ width: '72%' }} />
            </div>
          </div>

          {/* Time overlap */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-[#161c23]">Time overlap</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#006948]">High</span>
                <span className="font-mono font-semibold text-[#161c23]">(68%)</span>
              </div>
            </div>
            <div className="w-full bg-[#e3e8f3] h-2 rounded-full overflow-hidden">
              <div className="bg-[#006948] h-full rounded-full transition-all duration-700" style={{ width: '68%' }} />
            </div>
          </div>

          {/* Seat availability */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-[#161c23]">Seat availability</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#b15f00]">Medium</span>
                <span className="font-mono font-bold text-[#b15f00]">(41%)</span>
              </div>
            </div>
            <div className="w-full bg-[#e3e8f3] h-2 rounded-full overflow-hidden">
              <div className="bg-[#b15f00] h-full rounded-full transition-all duration-700" style={{ width: '41%' }} />
            </div>
          </div>

          {/* Flexibility */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-[#161c23]">Flexibility</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#6d7a72]">Medium</span>
                <span className="font-mono font-semibold text-[#161c23]">(55%)</span>
              </div>
            </div>
            <div className="w-full bg-[#e3e8f3] h-2 rounded-full overflow-hidden">
              <div className="bg-[#161c23] h-full rounded-full transition-all duration-700" style={{ width: '55%' }} />
            </div>
          </div>

          {/* Recurring travel */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-[#161c23]">Recurring travel</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#006948]">High</span>
                <span className="font-mono font-semibold text-[#161c23]">(76%)</span>
              </div>
            </div>
            <div className="w-full bg-[#e3e8f3] h-2 rounded-full overflow-hidden">
              <div className="bg-[#006948] h-full rounded-full transition-all duration-700" style={{ width: '76%' }} />
            </div>
          </div>
        </div>

        {/* Leverage Insight */}
        <div className="p-3 bg-[#eef4fe] rounded-lg flex items-center gap-2.5 border-l-3 border-[#006948]">
          <span className="material-symbols-outlined text-[18px] text-[#006948] shrink-0">
            lightbulb
          </span>
          <p className="text-[13px] text-[#161c23] leading-snug font-medium">
            One high-leverage driver can unlock 3 immediate ride opportunities.
          </p>
        </div>
      </section>
        </div>

        {/* Right Column: Corridor Topology & Actions */}
        <div className="lg:col-span-6 space-y-4">
      {/* 3. Corridor Topology */}
      <section className="bg-white p-5 rounded-xl shadow-xs space-y-3.5 border border-[#bccac0]/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#161c23]">
              device_hub
            </span>
            <h2 className="text-[16px] text-[#161c23] font-semibold">
              Corridor Topology
            </h2>
          </div>
          <span className="font-mono text-[12px] text-[#6d7a72]">
            3 Identified Pockets
          </span>
        </div>

        {/* Clean SVG Network Canvas matching Stitch */}
        <div className="relative w-full bg-[#eef4fe] rounded-lg p-2 flex flex-col items-center justify-center overflow-hidden border border-[#bccac0]/25">
          <svg
            className="w-full h-48 select-none"
            viewBox="0 0 340 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="clean-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.75" fill="#bccac0" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="340" height="190" fill="url(#clean-grid)" />

            {/* Corridor Cluster Envelopes */}
            <ellipse cx="75" cy="60" rx="55" ry="36" fill="#006948" fillOpacity="0.08" />
            <text x="75" y="22" fill="#3d4a42" fontFamily="Geist" fontSize="10" fontWeight="600" textAnchor="middle">
              North Corridor
            </text>

            <ellipse cx="260" cy="65" rx="50" ry="34" fill="#006948" fillOpacity="0.08" />
            <text x="260" y="24" fill="#3d4a42" fontFamily="Geist" fontSize="10" fontWeight="600" textAnchor="middle">
              Campus Ridge
            </text>

            <ellipse cx="165" cy="145" rx="48" ry="28" fill="#006948" fillOpacity="0.08" />
            <text x="165" y="182" fill="#3d4a42" fontFamily="Geist" fontSize="10" fontWeight="600" textAnchor="middle">
              West Metro
            </text>

            {/* Subtle Community Relationship Lines (Dotted) */}
            <g opacity="0.5" stroke="#bccac0" strokeDasharray="2 2" strokeWidth="1">
              <line x1="45" y1="50" x2="70" y2="75" />
              <line x1="70" y1="75" x2="100" y2="55" />
              <line x1="235" y1="75" x2="280" y2="55" />
              <line x1="135" y1="145" x2="195" y2="150" />
            </g>

            {/* Viable Ride Solid Connection Lines */}
            <g stroke="#006948" strokeWidth="1.5">
              <line x1="75" y1="45" x2="45" y2="50" />
              <line x1="75" y1="45" x2="100" y2="55" />
              <line x1="255" y1="45" x2="235" y2="75" />
              <line x1="255" y1="45" x2="280" y2="55" />
            </g>

            {/* Bridge Connector: Viable rides bridging into Driver #47 */}
            <g stroke="#006948" strokeDasharray="3 3" strokeWidth="1.5">
              <line x1="100" y1="55" x2="165" y2="85" />
              <line x1="165" y1="85" x2="235" y2="75" />
              <line x1="165" y1="85" x2="165" y2="135" />
            </g>

            {/* Passenger Nodes */}
            <circle cx="45" cy="50" r="3.5" fill="#161c23" />
            <circle cx="70" cy="75" r="3.5" fill="#161c23" />
            <circle cx="100" cy="55" r="3.5" fill="#161c23" />
            <circle cx="235" cy="75" r="3.5" fill="#161c23" />
            <circle cx="280" cy="55" r="3.5" fill="#161c23" />
            <circle cx="135" cy="145" r="3.5" fill="#161c23" />
            <circle cx="195" cy="150" r="3.5" fill="#161c23" />

            {/* Driver Nodes */}
            <circle cx="75" cy="45" r="5" fill="#006948" />
            <circle cx="255" cy="45" r="5" fill="#006948" />
            <circle cx="165" cy="135" r="5" fill="#006948" />

            {/* Connector / Catalyst Node: Driver #47 */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => {
                onSelectDriver('driver47');
                onNavigate('butterfly');
              }}
            >
              <circle cx="165" cy="85" r="7" fill="#ffffff" stroke="#006948" strokeWidth="2.5" />
              <circle cx="165" cy="85" r="3" fill="#006948" />
              <rect x="134" y="99" width="62" height="16" rx="3" fill="#ffffff" stroke="#006948" strokeWidth="1" />
              <text x="165" y="111" fill="#006948" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" textAnchor="middle">
                Driver #47
              </text>
            </g>
          </svg>

          {/* Visual Canvas Note */}
          <div className="w-full bg-white p-2.5 rounded-md mt-1 flex items-center justify-between border border-[#bccac0]/25">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#006948]"></span>
              <span className="text-[12px] text-[#161c23]">
                Driver <span className="font-mono font-bold">#47</span> bridges North & Campus Ridge
              </span>
            </div>
            <span className="font-mono text-[12px] text-[#006948] font-bold">
              3 Paired Matches
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between pt-1 px-1 text-[11px] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006948]"></span>
            <span className="text-[#3d4a42] font-medium">Driver</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#161c23]"></span>
            <span className="text-[#3d4a42] font-medium">Passenger</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-white border-2 border-[#006948]"></span>
            <span className="text-[#006948] font-bold">Connector (Driver #47)</span>
          </div>
        </div>
      </section>

      {/* 4. Primary CTA */}
      <section className="w-full pt-1 pb-4 space-y-2">
        <button
          onClick={() => onNavigate('butterfly')}
          className="w-full h-12 bg-[#006948] text-white rounded-lg text-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-[#00855d] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
        >
          <span>Find Butterfly Cluster</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
        <p className="font-mono text-[11px] text-center text-[#6d7a72]">
          Identifies the minimum driver interventions needed to unlock self-sustaining pools.
        </p>
      </section>
        </div>
      </div>

      {/* Synthetic Data Disclaimer Footer */}
      <div className="text-center pb-6 text-[#6d7a72] font-mono text-[10px] leading-relaxed">
        {SYNTHETIC_DISCLAIMER}
      </div>
    </div>
  );
};
