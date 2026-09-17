import React from 'react';
import { SYNTHETIC_DISCLAIMER } from '../data/syntheticData';

interface ExportBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportBriefingModal: React.FC<ExportBriefingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161c23]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl max-w-xl w-full p-6 shadow-xl border border-[#bccac0]/30 space-y-4 max-h-[90vh] overflow-y-auto print:p-0 print:shadow-none print:border-none">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#e9eef9] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[18px] text-[#161c23] uppercase tracking-tight">
                B-FLARE
              </span>
              <span className="font-mono text-[11px] bg-[#e3e8f3] text-[#3d4a42] px-2 py-0.5 rounded font-semibold">
                Briefing v1.4
              </span>
            </div>
            <h2 className="text-[16px] text-[#006948] font-semibold mt-0.5">
              Community Activation Memo: ABC University
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#6d7a72] hover:text-[#161c23] hover:bg-[#eef4fe] print:hidden"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3 text-[13px] text-[#3d4a42] leading-relaxed">
          <div className="p-3 bg-[#eef4fe] rounded-lg border border-[#bccac0]/20">
            <span className="font-mono text-[11px] uppercase font-bold text-[#006948] block mb-1">
              Core Recommendation
            </span>
            <p className="text-[#161c23] font-medium">
              Activate <strong>Driver #47</strong> (Whitefield → ABC University corridor) with <strong>Connector #12</strong> to unlock 3 immediate ride opportunities for Passenger #31 and Passenger #58.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-lg border border-[#bccac0]/25 space-y-1">
              <span className="font-mono text-[11px] text-[#6d7a72] block">Readiness Score</span>
              <span className="font-mono text-[20px] font-bold text-[#006948]">78 / 100</span>
              <span className="text-[11px] text-[#3d4a42] block">Status: Ready to activate</span>
            </div>

            <div className="p-3 rounded-lg border border-[#bccac0]/25 space-y-1">
              <span className="font-mono text-[11px] text-[#6d7a72] block">Seed Efficiency &amp; BER</span>
              <span className="font-mono text-[20px] font-bold text-[#006948]">2.25×</span>
              <span className="text-[11px] text-[#3d4a42] block">9 new users / 4 seeds</span>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <span className="font-mono text-[11px] uppercase font-bold text-[#161c23]">
              Diagnostic Breakdown
            </span>
            <ul className="list-disc pl-5 space-y-1 text-[12px] text-[#3d4a42]">
              <li><strong>Bottleneck Identified:</strong> Driver supply constraint (18 registered / 7 active threshold).</li>
              <li><strong>Viable Ride Matches:</strong> 42 paired opportunities identified across 14 corridors.</li>
              <li><strong>Available Vehicle Seats:</strong> 27 empty seats on recurring commuter trips.</li>
              <li><strong>Downstream Equilibrium:</strong> Simulated cascade yields 17 active participants after 3 repeat cycles.</li>
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-3 border-t border-[#e9eef9] flex items-center justify-between print:hidden">
          <span className="font-mono text-[10px] text-[#6d7a72]">
            {SYNTHETIC_DISCLAIMER}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-[#bccac0]/40 text-[#161c23] hover:bg-[#eef4fe] text-[12px] font-medium flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print Memo</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#006948] text-white text-[12px] font-semibold hover:bg-[#00855d] cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
