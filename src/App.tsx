/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScreenType, InterventionStatus } from './types';
import { SYNTHETIC_COMMUNITIES } from './data/syntheticData';
import { findButterflyCluster } from './utils/mobilityEngine';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Navigation } from './components/Navigation';
import { OverviewScreen } from './components/screens/OverviewScreen';
import { IntelligenceScreen } from './components/screens/IntelligenceScreen';
import { ButterflyScreen } from './components/screens/ButterflyScreen';
import { InterventionScreen } from './components/screens/InterventionScreen';
import { ImpactScreen } from './components/screens/ImpactScreen';
import { AlternativeClustersModal } from './components/AlternativeClustersModal';
import { ReviewMatchesModal } from './components/ReviewMatchesModal';
import { ExportBriefingModal } from './components/ExportBriefingModal';

export default function App() {
  // Screen routing state (synced with hash)
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('overview');
  const [selectedCommunityId, setSelectedCommunityId] = useState<string>('abc-university');
  const [interventionStatus, setInterventionStatus] = useState<InterventionStatus>('idle');

  // Modals state
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [reviewMatchesModalOpen, setReviewMatchesModalOpen] = useState(false);
  const [exportBriefingModalOpen, setExportBriefingModalOpen] = useState(false);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ScreenType;
      if (['overview', 'intelligence', 'butterfly', 'intervention', 'impact'].includes(hash)) {
        setCurrentScreen(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.location.hash = screen;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCommunity =
    SYNTHETIC_COMMUNITIES.find((c) => c.id === selectedCommunityId) ||
    SYNTHETIC_COMMUNITIES[0];

  const otherHubs = SYNTHETIC_COMMUNITIES.filter((c) => c.id !== selectedCommunityId);
  const cluster = findButterflyCluster();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f8f9ff] text-[#161c23] antialiased">
      {/* Persistent Left Sidebar on Laptop / Desktop */}
      <Sidebar
        currentScreen={currentScreen}
        selectedCommunityId={selectedCommunityId}
        onSelectCommunity={setSelectedCommunityId}
        onNavigate={handleNavigate}
        onOpenExportBriefing={() => setExportBriefingModalOpen(true)}
      />

      {/* Top Persistent Header on Mobile / Tablet */}
      <Header
        currentScreen={currentScreen}
        selectedCommunityId={selectedCommunityId}
        onSelectCommunity={setSelectedCommunityId}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area: Responsive padding for mobile top/bottom bars vs laptop sidebar */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-20 lg:pt-6 lg:pb-12 lg:pl-72 bg-[#f8f9ff] min-h-screen">
        {currentScreen === 'overview' && (
          <OverviewScreen
            community={activeCommunity}
            otherHubs={otherHubs}
            onNavigate={handleNavigate}
            onSelectCommunity={setSelectedCommunityId}
          />
        )}

        {currentScreen === 'intelligence' && (
          <IntelligenceScreen
            community={activeCommunity}
            onNavigate={handleNavigate}
            onSelectDriver={() => {
              // Target Driver #47
            }}
          />
        )}

        {currentScreen === 'butterfly' && (
          <ButterflyScreen
            cluster={cluster}
            onNavigate={handleNavigate}
            onOpenCompareModal={() => setCompareModalOpen(true)}
          />
        )}

        {currentScreen === 'intervention' && (
          <InterventionScreen
            onNavigate={handleNavigate}
            onOpenReviewMatchesModal={() => setReviewMatchesModalOpen(true)}
            interventionStatus={interventionStatus}
            setInterventionStatus={setInterventionStatus}
          />
        )}

        {currentScreen === 'impact' && (
          <ImpactScreen
            onNavigate={handleNavigate}
            onOpenExportBriefing={() => setExportBriefingModalOpen(true)}
          />
        )}
      </main>

      {/* Persistent Bottom Navigation */}
      <Navigation currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Modals */}
      <AlternativeClustersModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
      />

      <ReviewMatchesModal
        isOpen={reviewMatchesModalOpen}
        onClose={() => setReviewMatchesModalOpen(false)}
      />

      <ExportBriefingModal
        isOpen={exportBriefingModalOpen}
        onClose={() => setExportBriefingModalOpen(false)}
      />
    </div>
  );
}
