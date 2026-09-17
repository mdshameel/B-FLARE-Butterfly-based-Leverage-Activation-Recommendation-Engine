import React from 'react';
import { KEY_COMMUTERS } from '../data/syntheticData';

interface ReviewMatchesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewMatchesModal: React.FC<ReviewMatchesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const commuters = Object.values(KEY_COMMUTERS);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161c23]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl max-w-lg w-full p-5 shadow-xl border border-[#bccac0]/30 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-[#e9eef9] pb-3">
          <div>
            <span className="font-mono text-[11px] text-[#006948] uppercase font-semibold">
              Privacy-Conscious Matching
            </span>
            <h3 className="text-[18px] font-semibold text-[#161c23]">
              Verified Corridor Matches
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#6d7a72] hover:text-[#161c23] hover:bg-[#eef4fe]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-3 bg-[#eef4fe] rounded-lg border border-[#bccac0]/25 text-[12px] text-[#3d4a42] flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-[#006948] shrink-0">
            shield
          </span>
          <span>
            Strict privacy protection enabled. Exact addresses and contact details are masked. Only approximate corridor zones and departure windows are displayed.
          </span>
        </div>

        <div className="space-y-2.5">
          {commuters.map((c) => (
            <div
              key={c.id}
              className="p-3 rounded-lg border border-[#bccac0]/30 bg-white hover:bg-[#f8f9ff] transition-colors flex items-center justify-between gap-3"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px] font-bold text-[#161c23]">
                    {c.codeName}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded font-semibold uppercase ${
                      c.role === 'driver'
                        ? 'bg-[#85f8c4] text-[#002114]'
                        : c.role === 'connector'
                        ? 'bg-[#e3e8f3] text-[#161c23]'
                        : 'bg-[#eef4fe] text-[#3d4a42]'
                    }`}
                  >
                    {c.role}
                  </span>
                </div>
                <div className="text-[12px] text-[#6d7a72]">
                  Zone: <span className="text-[#161c23] font-medium">{c.originZone}</span> →{' '}
                  <span className="text-[#161c23] font-medium">{c.destinationZone}</span>
                </div>
              </div>

              <div className="text-right font-mono text-[11px] shrink-0">
                <div className="text-[#161c23] font-bold">{c.departureTime} AM</div>
                <div className="text-[#006948] font-medium">±{c.timeFlexibility}m flex</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#006948] text-white text-[13px] font-semibold hover:bg-[#00855d] cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
