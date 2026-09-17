import React from 'react';
import { ScreenType } from '../types';

interface NavigationProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

interface NavItem {
  id: ScreenType;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: 'explore' },
  { id: 'intelligence', label: 'Intelligence', icon: 'hub' },
  { id: 'butterfly', label: 'Butterfly', icon: 'scatter_plot' },
  { id: 'intervention', label: 'Intervention', icon: 'bolt' },
  { id: 'impact', label: 'Impact', icon: 'trending_up' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate }) => {
  return (
    <nav 
      aria-label="Main Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 pb-[env(safe-area-inset-bottom,0px)] bg-[#f8f9ff]/92 backdrop-blur-xl border-t border-[#bccac0]/25 shadow-[0_-1px_8px_rgba(22,28,35,0.03)]"
    >
      <div className="max-w-md md:max-w-xl mx-auto flex justify-around items-center h-16 px-1">
        {NAV_ITEMS.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors select-none ${
                isActive
                  ? 'text-[#006948] font-medium'
                  : 'text-[#6d7a72] hover:text-[#161c23]'
              }`}
            >
              <div className="relative">
                <span 
                  className={`material-symbols-outlined text-[20px] transition-transform ${
                    isActive ? 'scale-110' : ''
                  }`}
                >
                  {item.icon}
                </span>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#006948]" />
                )}
              </div>
              <span className="font-mono text-[11px] mt-0.5 font-medium tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
