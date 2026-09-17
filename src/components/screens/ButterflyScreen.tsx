import React from 'react';
import { ButterflyCluster, ScreenType } from '../../types';
import { SYNTHETIC_DISCLAIMER } from '../../data/syntheticData';

interface ButterflyScreenProps {
  cluster: ButterflyCluster;
  onNavigate: (screen: ScreenType) => void;
  onOpenCompareModal: () => void;
}

export const ButterflyScreen: React.FC<ButterflyScreenProps> = ({
  cluster,
  onNavigate,
  onOpenCompareModal,
}) => {
  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 py-4 max-w-xl lg:max-w-5xl xl:max-w-6xl mx-auto space-y-6">
      {/* Header Contextual Block */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#006948] animate-pulse"></span>
          <span className="font-mono text-[11px] text-[#006948] uppercase tracking-wider font-semibold">
            Who can unlock the network?
          </span>
        </div>
        <h1 className="text-[26px] text-[#161c23] tracking-tight font-semibold leading-tight">
          The Butterfly Cluster
        </h1>
        <p className="text-[14px] text-[#3d4a42]">
          Smallest group with the highest activation potential.
        </p>
      </div>

      {/* Responsive Grid: 1 col mobile, 2 col laptop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Cluster Architecture Graph */}
        <div className="lg:col-span-7 space-y-4">
          {/* Primary Recommended Butterfly Cluster Card & Visualization */}
          <article className="bg-white rounded-xl p-5 shadow-xs space-y-4 border border-[#bccac0]/30">
        {/* Core Proposition Headline */}
        <div className="space-y-1 border-b border-[#e9eef9] pb-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-[#eef4fe] text-[#006948] font-mono text-[11px] font-semibold border border-[#bccac0]/25">
              Catalytic Seed Cohort
            </span>
            <span className="font-mono text-[11px] text-[#6d7a72] font-semibold">
              Seed Size: 4 Commuters
            </span>
          </div>
          <h2 className="text-[18px] text-[#161c23] font-semibold tracking-tight pt-1">
            4 people can unlock 3 immediate ride opportunities.
          </h2>
        </div>

        {/* Visual Centerpiece: The Butterfly Cluster Network Architecture */}
        <div className="bg-[#eef4fe] rounded-xl p-4 border border-[#bccac0]/25 space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#6d7a72]">
            <span>CLUSTER TOPOLOGY</span>
            <span className="text-[#006948] font-semibold">Self-Sustaining Seed</span>
          </div>

          {/* Clean Interactive Graph Diagram matching prompt specification */}
          <div className="relative py-2 flex flex-col items-center">
            {/* 1. Connector Node (Top) */}
            <div className="flex flex-col items-center">
              <div className="bg-white border-2 border-[#161c23] px-3.5 py-2 rounded-lg shadow-2xs text-center flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#161c23]"></span>
                <div className="text-left">
                  <span className="font-mono text-[13px] font-bold text-[#161c23] block leading-tight">
                    {cluster.connector.codeName}
                  </span>
                  <span className="font-mono text-[10px] text-[#6d7a72]">
                    Coordination &amp; Trust Node
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center py-1">
              <span className="material-symbols-outlined text-[18px] text-[#006948]">
                arrow_downward
              </span>
            </div>

            {/* 2. Driver Node (Catalytic Core) */}
            <div className="flex flex-col items-center">
              <div className="bg-[#006948] text-white px-4 py-2.5 rounded-lg shadow-xs text-center flex items-center gap-2.5 ring-4 ring-[#85f8c4]/40">
                <span className="material-symbols-outlined text-[18px] text-[#85f8c4]">
                  directions_car
                </span>
                <div className="text-left">
                  <span className="font-mono text-[14px] font-bold block leading-tight">
                    {cluster.driver.codeName}
                  </span>
                  <span className="font-mono text-[10px] text-[#85f8c4] font-medium">
                    Catalyst Driver (2 Empty Seats)
                  </span>
                </div>
              </div>
            </div>

            {/* Branching Connecting Arrows */}
            <div className="w-full max-w-[280px] flex items-center justify-between px-10 py-1 text-[#006948]">
              <span className="material-symbols-outlined text-[18px] -rotate-45">
                arrow_downward
              </span>
              <span className="font-mono text-[10px] text-[#6d7a72] font-semibold uppercase">
                3 Paired Rides
              </span>
              <span className="material-symbols-outlined text-[18px] rotate-45">
                arrow_downward
              </span>
            </div>

            {/* 3. Passenger Nodes (Bottom Leaves) */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-3 pt-1">
              {cluster.passengers.map((p) => (
                <div
                  key={p.id}
                  className="bg-white border border-[#bccac0]/30 p-2.5 rounded-lg shadow-2xs flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#3d4a42]"></span>
                  <div className="min-w-0">
                    <span className="font-mono text-[12px] font-bold text-[#161c23] block truncate">
                      {p.codeName}
                    </span>
                    <span className="font-mono text-[10px] text-[#6d7a72] block truncate">
                      {p.originZone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
        </div>

        {/* Right Column: Multiplier Metric, Evidence & Actions */}
        <div className="lg:col-span-5 space-y-4">
          {/* Seed Efficiency Metric Box */}
          <div className="p-4 bg-white rounded-xl border border-[#bccac0]/30 shadow-xs flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6d7a72] font-semibold block">
                Seed Efficiency
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-[24px] font-bold text-[#006948] leading-none">
                  2.25×
                </span>
                <span className="text-[13px] text-[#3d4a42] font-medium">
                  Downstream multiplier
                </span>
              </div>
              <p className="text-[11px] text-[#6d7a72] font-mono pt-0.5">
                Expected new active users / seed users (9 ÷ 4 = 2.25×)
              </p>
            </div>
            <div className="h-11 w-11 rounded-full bg-[#85f8c4] flex items-center justify-center shrink-0 text-[#002114]">
              <span className="material-symbols-outlined text-[22px]">bolt</span>
            </div>
          </div>

          {/* Why this cluster? Evidence Bullets */}
          <div className="bg-white rounded-xl p-5 shadow-xs border border-[#bccac0]/30 space-y-2.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#161c23] font-bold block">
              Why this cluster?
            </span>
            <div className="space-y-2">
              {cluster.rationale.map((reason, i) => (
                <div key={i} className="flex items-start gap-2 text-[13px] text-[#3d4a42]">
                  <span className="material-symbols-outlined text-[16px] text-[#006948] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="leading-snug">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Action Dispatch Unit */}
          <div className="space-y-2.5 pt-1">
            <button
              onClick={() => onNavigate('intervention')}
              className="w-full h-12 rounded-lg bg-[#006948] hover:bg-[#00855d] text-white flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.99] text-[15px] font-semibold cursor-pointer"
            >
              <span>Activate cluster →</span>
            </button>

            <button
              onClick={onOpenCompareModal}
              className="w-full h-10 rounded-lg bg-[#eef4fe] hover:bg-[#e9eef9] text-[#161c23] flex items-center justify-center gap-2 border border-[#bccac0]/30 transition-colors text-[13px] font-medium cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#6d7a72]">
                compare_arrows
              </span>
              <span>Compare alternative clusters</span>
            </button>
          </div>

          {/* Simulation Authority Notice */}
          <div className="flex items-center justify-center gap-1.5 text-[#6d7a72] pt-2 pb-2 text-center font-mono">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            <span className="text-[10px] uppercase tracking-wide">
              Validated via campus mobility graph &amp; route schedule analysis
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
