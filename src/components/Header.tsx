import React, { useState } from 'react';
import { ScreenType } from '../types';
import { SYNTHETIC_COMMUNITIES } from '../data/syntheticData';
import { ButterflyLogo } from './ButterflyLogo';

interface HeaderProps {
  currentScreen: ScreenType;
  selectedCommunityId: string;
  onSelectCommunity: (communityId: string) => void;
  onNavigate: (screen: ScreenType) => void;
}

const SCREEN_TITLES: Record<ScreenType, string> = {
  overview: 'Overview',
  intelligence: 'Intelligence',
  butterfly: 'Butterfly',
  intervention: 'Intervention',
  impact: 'Impact',
};

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  selectedCommunityId,
  onSelectCommunity,
  onNavigate,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const activeCommunity =
    SYNTHETIC_COMMUNITIES.find((c) => c.id === selectedCommunityId) ||
    SYNTHETIC_COMMUNITIES[0];

  return (
    <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-[#f8f9ff]/92 backdrop-blur-xl border-b border-[#bccac0]/25 shadow-[0_1px_8px_rgba(22,28,35,0.04)] pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between gap-3">
        {/* Logo & Brand with Line Art Butterfly */}
        <div 
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => onNavigate('overview')}
          title="Return to Overview"
        >
          <div className="w-9 h-9 rounded-lg bg-white border border-[#bccac0]/30 flex items-center justify-center shadow-2xs">
            <ButterflyLogo className="w-5 h-5 text-[#161c23]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-[15px] text-[#161c23] tracking-tight uppercase">
                B-FLARE
              </span>
              <span className="font-mono text-[10px] text-[#3d4a42] bg-[#e3e8f3] px-1.5 py-0.5 rounded leading-none font-medium">
                v1.4
              </span>
            </div>
            <span className="text-[11px] text-[#6d7a72] leading-tight font-mono">
              {SCREEN_TITLES[currentScreen]}
            </span>
          </div>
        </div>

        {/* Desktop Quick Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#eef4fe] p-1 rounded-lg border border-[#bccac0]/30">
          {(Object.keys(SCREEN_TITLES) as ScreenType[]).map((screenKey) => {
            const isActive = currentScreen === screenKey;
            return (
              <button
                key={screenKey}
                onClick={() => onNavigate(screenKey)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#006948] text-white shadow-xs font-semibold'
                    : 'text-[#3d4a42] hover:text-[#161c23] hover:bg-white/60'
                }`}
              >
                {SCREEN_TITLES[screenKey]}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Community Selector & Profile */}
        <div className="flex items-center gap-2 relative">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="h-9 px-3 rounded bg-[#eef4fe] border border-[#bccac0]/40 flex items-center gap-2 text-[#161c23] hover:bg-[#e9eef9] transition-colors shadow-2xs text-left"
              aria-label="Switch Community"
            >
              <span className="w-2 h-2 rounded-full bg-[#006948] animate-pulse"></span>
              <span className="font-mono text-[12px] font-semibold truncate max-w-[120px] sm:max-w-[160px]">
                {activeCommunity.name}
              </span>
              <span className="material-symbols-outlined text-[16px] text-[#6d7a72]">
                unfold_more
              </span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div 
                className="absolute right-0 mt-1.5 w-64 bg-white rounded-lg border border-[#bccac0]/40 shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="px-3 py-1.5 border-b border-[#e9eef9] text-[11px] font-mono text-[#6d7a72] uppercase font-semibold">
                  Monitored Communities
                </div>
                {SYNTHETIC_COMMUNITIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCommunity(c.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left flex items-center justify-between transition-colors ${
                      c.id === selectedCommunityId
                        ? 'bg-[#eef4fe] text-[#006948]'
                        : 'hover:bg-[#f8f9ff] text-[#161c23]'
                    }`}
                  >
                    <div>
                      <div className="text-[13px] font-medium leading-tight">
                        {c.name}
                      </div>
                      <div className="text-[11px] text-[#6d7a72] font-mono">
                        {c.mobilityParticipants} participants · {c.status}
                      </div>
                    </div>
                    <span className="font-mono text-[12px] font-bold text-[#006948]">
                      {c.readinessScore}/100
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Profile Avatar */}
          <div className="w-9 h-9 flex items-center justify-center p-0 rounded-full border border-[#bccac0]/40 overflow-hidden shadow-2xs">
            <img
              alt="Mobility Lead Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWotJl2tZmjGA3aqPOCmeBV1Rxr_Uw5sCJuzfImfKImtuxVulHVLc6oqKX8h7UIQux9h1SkNl-eq_fUIOQUKA7omNshQpH6Hkl7zbwdmiooqh7rPsk8phHWt4hw14VSCyqvdH6UJfyQVP3MKsIvH1OsXx0R-Qwk_2UtbCX_qYdEqltEZGXPoRINSoKh1ZNR5UwE3LpukLKesZc2m4CeKGHfDdCG-0jLDk1VfDSrKdY0cGj1ITf4x4h5A"
              onError={(e) => {
                // Fallback icon
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
