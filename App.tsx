
import React, { useState } from 'react';
import { Header } from './components/Header';
import { RegionDetail } from './components/RegionDetail';
import { LandingPage } from './components/LandingPage';
import { SplashScreen } from './components/SplashScreen';
import { LA_CAMPANA_DATA } from './constants';

function App() {
  const [loading, setLoading] = useState(true);
  const [showExperience, setShowExperience] = useState(false);

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-raulif-green selection:text-black">
      <Header onLogoClick={() => setShowExperience(false)} />
      <main className="w-full">
        {!showExperience ? (
          <LandingPage onStartExperience={() => setShowExperience(true)} />
        ) : (
          <RegionDetail region={LA_CAMPANA_DATA} />
        )}
      </main>
    </div>
  );
}

export default App;
