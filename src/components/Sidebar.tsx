import React, { useState } from 'react';
import { ScreenType } from '../types';
import { SYNTHETIC_COMMUNITIES } from '../data/syntheticData';
import { ButterflyLogo } from './ButterflyLogo';

interface SidebarProps {
  currentScreen: ScreenType;
  selectedCommunityId: string;
  onSelectCommunity: (communityId: string) => void;
  onNavigate: (screen: ScreenType) => void;
  onOpenExportBriefing: () => void;
}

interface NavMenuItem {
  id: ScreenType;
  label: string;
  subtitle: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
}

const NAV_MENU_ITEMS: NavMenuItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    subtitle: 'Priority Opportunity',
    icon: 'explore',
    badge: 'Ready',
    badgeColor: 'bg-[#85f8c4] text-[#002114]',
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    subtitle: 'Corridor & Supply',
    icon: 'hub',
    badge: '78%',
    badgeColor: 'bg-[#dde3ed] text-[#161c23]',
  },
  {
    id: 'butterfly',
    label: 'Butterfly Cluster',
    subtitle: 'Leverage Detection',
    icon: 'scatter_plot',
    badge: '2.25×',
    badgeColor: 'bg-[#006948] text-white',
  },
  {
    id: 'intervention',
    label: 'Intervention',
    subtitle: 'Driver #47 Activation',
    icon: 'bolt',
    badge: 'Action',
    badgeColor: 'bg-[#fef08a] text-[#713f12]',
  },
  {
    id: 'impact',
    label: 'Cascading Impact',
    subtitle: 'The Butterfly Effect',
    icon: 'trending_up',
    badge: 'BER',
    badgeColor: 'bg-[#85f8c4] text-[#002114]',
  },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentScreen,
  selectedCommunityId,
  onSelectCommunity,
  onNavigate,
  onOpenExportBriefing,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeCommunity =
    SYNTHETIC_COMMUNITIES.find((c) => c.id === selectedCommunityId) ||
    SYNTHETIC_COMMUNITIES[0];

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen fixed top-0 left-0 z-40 bg-[#f8f9ff] border-r border-[#bccac0]/30 shadow-[1px_0_12px_rgba(22,28,35,0.03)] select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-[#bccac0]/25 flex flex-col gap-4">
        <div
          onClick={() => onNavigate('overview')}
          className="flex items-center gap-3 cursor-pointer group"
          title="B-FLARE Mobility Intelligence"
        >
          <div className="w-10 h-10 rounded-xl bg-white border border-[#bccac0]/30 flex items-center justify-center shadow-xs group-hover:border-[#006948]/50 transition-colors">
            <ButterflyLogo className="w-6 h-6 text-[#161c23] group-hover:text-[#006948] transition-colors" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[17px] text-[#161c23] tracking-tight">
                B-FLARE
              </span>
              <span className="font-mono text-[10px] bg-[#e3e8f3] text-[#3d4a42] px-1.5 py-0.5 rounded font-semibold">
                v1.4
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#6d7a72] leading-none">
              FellaRide Mobility
            </span>
          </div>
        </div>

        {/* Community Hub Selector */}
        <div className="relative">
          <label className="font-mono text-[10px] uppercase font-bold text-[#6d7a72] tracking-wider block mb-1.5">
            Active Community Hub
          </label>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full h-10 px-3 rounded-lg bg-white border border-[#bccac0]/40 flex items-center justify-between gap-2 text-[#161c23] hover:bg-[#f1f5fd] transition-colors shadow-2xs text-left cursor-pointer"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#006948] animate-pulse shrink-0"></span>
              <span className="font-mono text-[12px] font-semibold truncate">
                {activeCommunity.name}
              </span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-[#6d7a72] shrink-0">
              unfold_more
            </span>
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#bccac0]/40 rounded-xl shadow-xl z-50 p-1.5 space-y-1">
              <div className="px-2 py-1 font-mono text-[10px] text-[#6d7a72] uppercase font-bold">
                Switch Hub
              </div>
              {SYNTHETIC_COMMUNITIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    onSelectCommunity(c.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full px-2.5 py-2 rounded-lg flex items-center justify-between text-left transition-colors cursor-pointer ${
                    c.id === selectedCommunityId
                      ? 'bg-[#eef4fe] text-[#006948] font-semibold'
                      : 'text-[#161c23] hover:bg-[#f1f5fd]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[12px] font-medium leading-tight">
                      {c.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#6d7a72]">
                      {c.status}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#006948]">
                    {c.readinessScore}/100
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-1 font-mono text-[10px] uppercase font-bold text-[#6d7a72] tracking-wider">
          Activation Sequence
        </div>

        {NAV_MENU_ITEMS.map((item, index) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-all cursor-pointer group text-left ${
                isActive
                  ? 'bg-[#006948] text-white shadow-xs font-semibold'
                  : 'text-[#3d4a42] hover:bg-white hover:text-[#161c23]'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'bg-[#eef4fe] text-[#006948] group-hover:bg-[#dde3ed]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {item.icon}
                  </span>
                </div>

                <div className="flex flex-col min-w-0">
                  <span
                    className={`text-[13px] tracking-tight leading-tight truncate ${
                      isActive ? 'text-white font-semibold' : 'text-[#161c23]'
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`text-[11px] font-mono leading-tight truncate ${
                      isActive ? 'text-[#85f8c4]' : 'text-[#6d7a72]'
                    }`}
                  >
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {item.badge && (
                <span
                  className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    isActive
                      ? 'bg-white text-[#006948]'
                      : item.badgeColor || 'bg-[#eef4fe] text-[#3d4a42]'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Export Briefing Action */}
        <div className="pt-3">
          <button
            onClick={onOpenExportBriefing}
            className="w-full h-10 px-3 rounded-xl bg-white border border-[#bccac0]/40 text-[#161c23] hover:bg-[#eef4fe] flex items-center justify-center gap-2 text-[12px] font-medium shadow-2xs transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[17px] text-[#006948]">
              picture_as_pdf
            </span>
            <span>Export Briefing (PDF)</span>
          </button>
        </div>
      </nav>

      {/* Bottom Network Diagnostic & Privacy Status */}
      <div className="p-4 border-t border-[#bccac0]/25 bg-white/70 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#6d7a72]">Network State:</span>
          <span className="text-[#006948] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006948] animate-pulse"></span>
            Simulated Live
          </span>
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#6d7a72]">Viable Matches:</span>
          <span className="text-[#161c23] font-semibold">42 verified</span>
        </div>
        <div className="pt-1.5 border-t border-[#bccac0]/20 flex items-center gap-1.5 text-[10px] font-mono text-[#6d7a72]">
          <span className="material-symbols-outlined text-[14px] text-[#006948]">
            verified_user
          </span>
          <span>Strict PII masking enabled</span>
        </div>
      </div>
    </aside>
  );
};
