import React from 'react';
import { ALTERNATIVE_CLUSTERS } from '../data/syntheticData';

interface AlternativeClustersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCluster?: (clusterId: string) => void;
}

export const AlternativeClustersModal: React.FC<AlternativeClustersModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161c23]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl max-w-lg w-full p-5 shadow-xl border border-[#bccac0]/30 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-[#e9eef9] pb-3">
          <div>
            <span className="font-mono text-[11px] text-[#006948] uppercase font-semibold">
              Leverage Benchmark
            </span>
            <h3 className="text-[18px] font-semibold text-[#161c23]">
              Compare Alternative Clusters
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#6d7a72] hover:text-[#161c23] hover:bg-[#eef4fe]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="text-[13px] text-[#3d4a42] leading-relaxed">
          B-FLARE evaluates all potential seed configurations across route alignment, time flexibility, and downstream multiplier to isolate the minimum intervention set.
        </p>

        <div className="space-y-3">
          {ALTERNATIVE_CLUSTERS.map((c) => (
            <div
              key={c.clusterId}
              className={`p-3.5 rounded-lg border transition-all ${
                c.isPrimary
                  ? 'bg-[#85f8c4]/20 border-[#006948] ring-1 ring-[#006948]/20'
                  : 'bg-[#eef4fe]/50 border-[#bccac0]/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[14px] text-[#161c23]">
                    {c.name}
                  </span>
                  {c.isPrimary && (
                    <span className="font-mono text-[10px] bg-[#006948] text-white px-2 py-0.5 rounded font-bold uppercase">
                      Selected
                    </span>
                  )}
                </div>
                <span className="font-mono text-[15px] font-bold text-[#006948]">
                  {c.seedEfficiency}×
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#bccac0]/20 text-[11px] font-mono text-[#3d4a42]">
                <div>
                  <span className="text-[#6d7a72]">Route Overlap: </span>
                  <span className="font-semibold">{c.routeOverlap}</span>
                </div>
                <div>
                  <span className="text-[#6d7a72]">Timing: </span>
                  <span className="font-semibold">{c.scheduleFit}</span>
                </div>
              </div>

              <p className="text-[12px] text-[#3d4a42] mt-2 font-medium">
                {c.verdict}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#006948] text-white text-[13px] font-semibold hover:bg-[#00855d] cursor-pointer"
          >
            Confirm Driver #47 Cluster
          </button>
        </div>
      </div>
    </div>
  );
};
