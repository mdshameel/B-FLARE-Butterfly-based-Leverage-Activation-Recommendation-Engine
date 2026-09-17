import React, { useState } from 'react';
import { ScreenType, InterventionStatus } from '../../types';
import { KEY_COMMUTERS, SYNTHETIC_DISCLAIMER } from '../../data/syntheticData';

interface InterventionScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenReviewMatchesModal: () => void;
  interventionStatus: InterventionStatus;
  setInterventionStatus: React.Dispatch<React.SetStateAction<InterventionStatus>>;
}

export const InterventionScreen: React.FC<InterventionScreenProps> = ({
  onNavigate,
  onOpenReviewMatchesModal,
  interventionStatus,
  setInterventionStatus,
}) => {
  const driver = KEY_COMMUTERS.driver47;
  const [isProcessing, setIsProcessing] = useState(false);
  const [scheduledNotification, setScheduledNotification] = useState<string | null>(null);

  const handleSendInvite = () => {
    setIsProcessing(true);
    setInterventionStatus('sending');

    setTimeout(() => {
      setInterventionStatus('sent');
      setIsProcessing(false);

      // Simulate driver response after a brief pause
      setTimeout(() => {
        setInterventionStatus('accepted');
        setTimeout(() => {
          setInterventionStatus('ride_created');
        }, 1200);
      }, 1400);
    }, 900);
  };

  const handleReset = () => {
    setInterventionStatus('idle');
    setScheduledNotification(null);
  };

  const handleScheduleMonday = () => {
    setScheduledNotification("Commute schedule locked for Monday 08:15 AM in synthetic schedule simulator.");
    setTimeout(() => setScheduledNotification(null), 4000);
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 py-4 max-w-xl lg:max-w-5xl xl:max-w-6xl mx-auto space-y-6">
      {/* Header Direct Intervention Title */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#006948] font-semibold">
            What should we do?
          </span>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#e3e8f3] text-[#3d4a42] font-semibold">
            Priority Action
          </span>
        </div>
        <h1 className="text-[24px] sm:text-[28px] text-[#161c23] tracking-tight font-semibold leading-tight">
          Activate Driver #47
        </h1>
        <p className="text-[14px] sm:text-[15px] text-[#3d4a42] leading-relaxed">
          Add one reliable driver to unlock 3 compatible commuters in the North Corridor.
        </p>
      </div>

      {/* Responsive 2-column grid on laptop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Target Profile & Invitation Preview */}
        <div className="lg:col-span-6 space-y-4">
          {/* Driver Profile & Mobility Parameters Card */}
          <div className="bg-white rounded-xl shadow-xs p-5 border border-[#bccac0]/30 space-y-3.5">
            <div className="flex items-center justify-between border-b border-[#e9eef9] pb-2.5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#006948]">
                  directions_car
                </span>
                <span className="font-mono text-[13px] font-bold text-[#161c23]">
                  Target Commute Profile
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#006948] bg-[#85f8c4] px-2 py-0.5 rounded font-semibold">
                High Leverage
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[13px]">
              <div className="space-y-0.5">
                <span className="font-mono text-[11px] text-[#6d7a72] block">Corridor Zone</span>
                <span className="font-semibold text-[#161c23] block">
                  {driver.originZone} → {driver.destinationZone}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[11px] text-[#6d7a72] block">Departure Time</span>
                <span className="font-semibold text-[#161c23] block">
                  {driver.departureTime} AM (±15 min)
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[11px] text-[#6d7a72] block">Available Seats</span>
                <span className="font-semibold text-[#161c23] block">
                  {driver.availableSeats} Empty Vehicle Seats
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[11px] text-[#6d7a72] block">Recurrence</span>
                <span className="font-semibold text-[#161c23] block">
                  {driver.recurringDays} Days / Week
                </span>
              </div>
            </div>
          </div>

          {/* Invitation Preview Card */}
          <div className="flex flex-col rounded-xl bg-white shadow-xs p-5 gap-3 border border-[#bccac0]/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#161c23] font-semibold text-[14px]">
                <span className="material-symbols-outlined text-[18px] text-[#006948]">sms</span>
                <span>Invitation Preview</span>
              </div>
              <span className="font-mono text-[11px] text-[#6d7a72] uppercase font-semibold">
                DRIVER #47
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#eef4fe] flex flex-col gap-1.5 border border-[#bccac0]/25">
              <div className="flex items-center justify-between text-[#6d7a72] font-mono text-[11px]">
                <span className="font-medium">SMS &amp; Campus Mobility App</span>
                <span className="material-symbols-outlined text-[15px]">lock</span>
              </div>
              <p className="text-[13px] text-[#161c23] leading-relaxed pt-0.5 font-normal italic">
                “Hi! 3 verified members of your community travel a similar route around 8:15 AM. Would you like to start a recurring ride?”
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Action Center */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-xl shadow-xs p-5 border border-[#bccac0]/30 space-y-3.5">
            <div className="flex items-center justify-between border-b border-[#e9eef9] pb-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6d7a72] font-semibold">
                Intervention Execution
              </span>
              <span className="font-mono text-[11px] text-[#006948] font-semibold">
                One-Click Protocol
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {interventionStatus === 'idle' && (
                <button
                  onClick={handleSendInvite}
                  disabled={isProcessing}
                  className="w-full h-12 rounded-lg bg-[#006948] text-white text-[15px] font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-[#00855d] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Send driver invite</span>
                </button>
              )}

              {interventionStatus === 'sending' && (
                <button
                  disabled
                  className="w-full h-12 rounded-lg bg-[#006948]/90 text-white text-[15px] font-semibold flex items-center justify-center gap-2 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  <span>Dispatching secure invite...</span>
                </button>
              )}

              {interventionStatus === 'sent' && (
                <div className="p-3.5 rounded-lg bg-[#eef4fe] border border-[#006948]/30 flex flex-col gap-1.5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-[#006948] font-semibold text-[14px]">
                    <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
                    <span>State 1: Invitation Sent</span>
                  </div>
                  <p className="text-[12px] text-[#3d4a42]">
                    Cryptographic invite packet delivered to Driver #47 via SMS &amp; Campus Mobility App. Waiting for response...
                  </p>
                </div>
              )}

              {interventionStatus === 'accepted' && (
                <div className="p-3.5 rounded-lg bg-[#85f8c4]/30 border border-[#006948]/40 flex flex-col gap-1.5 animate-in fade-in zoom-in-98 duration-200">
                  <div className="flex items-center gap-2 text-[#006948] font-bold text-[14px]">
                    <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                    <span>State 2: Driver #47 Accepted!</span>
                  </div>
                  <p className="text-[12px] text-[#3d4a42]">
                    Confirmed route: Whitefield → ABC University at 8:15 AM. 2 seats unlocked. Creating first ride...
                  </p>
                </div>
              )}

              {interventionStatus === 'ride_created' && (
                <div className="p-4 rounded-xl bg-[#85f8c4]/40 border-2 border-[#006948] flex flex-col gap-3 shadow-xs animate-in fade-in slide-in-from-bottom duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#006948] font-bold text-[15px]">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span>State 3: First Ride Created!</span>
                    </div>
                    <span className="font-mono text-[11px] bg-[#006948] text-white px-2 py-0.5 rounded font-semibold">
                      Corridor Activated
                    </span>
                  </div>
                  <p className="text-[13px] text-[#161c23] leading-snug">
                    Driver #47 paired with Passenger #31 and Passenger #58. Initial commute scheduled for Monday 8:15 AM.
                  </p>
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => onNavigate('impact')}
                      className="flex-1 h-11 rounded-lg bg-[#006948] text-white text-[14px] font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-[#00855d] transition-all cursor-pointer"
                    >
                      <span>View Butterfly Effect</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    <button
                      onClick={handleReset}
                      title="Reset simulation step"
                      className="px-3 h-11 rounded-lg bg-white border border-[#bccac0]/40 text-[#6d7a72] hover:text-[#161c23] flex items-center justify-center text-[12px] font-mono cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">refresh</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Secondary Action Controls */}
              <button
                onClick={onOpenReviewMatchesModal}
                className="w-full h-11 rounded-lg bg-white text-[#161c23] text-[13px] font-medium flex items-center justify-center gap-2 border border-[#bccac0]/30 shadow-2xs hover:bg-[#eef4fe] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#6d7a72]">groups</span>
                <span>Review matches</span>
              </button>

              <button
                onClick={handleScheduleMonday}
                className="w-full h-9 rounded-lg text-[#6d7a72] hover:text-[#161c23] text-[12px] font-mono flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[15px]">calendar_today</span>
                <span>Schedule for Monday</span>
              </button>

              {scheduledNotification && (
                <div className="p-2.5 rounded-lg bg-[#eef4fe] border border-[#006948]/30 text-[12px] text-[#006948] font-mono text-center animate-in fade-in duration-150">
                  {scheduledNotification}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Synthetic Data Notice */}
      <div className="text-center pt-2 pb-6 text-[#6d7a72] font-mono text-[10px] leading-relaxed">
        {SYNTHETIC_DISCLAIMER}
      </div>
    </div>
  );
};
