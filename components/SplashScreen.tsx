
import React, { useEffect, useState } from 'react';
import { Fingerprint } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Sequence: 
    // 1. Show logo (0ms)
    // 2. Start fading out (2500ms)
    // 3. Unmount (3000ms)
    const fadeTimer = setTimeout(() => setFade(true), 2500);
    const completeTimer = setTimeout(onComplete, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative mb-6">
        {/* Abstract representation of the logo if image fails or while loading */}
        <div className="absolute inset-0 bg-raulif-green blur-3xl opacity-20 animate-pulse-slow"></div>
        {/* We use the Fingerprint icon as a placeholder for the SVG provided, styled to look like the brand */}
        <Fingerprint size={80} className="text-white relative z-10 animate-pulse" strokeWidth={1} />
        <div className="absolute -right-2 -top-2 w-4 h-4 bg-raulif-green rounded-full animate-ping"></div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-sans font-light tracking-widest text-white uppercase animate-fade-in-up">
        Raulif
      </h1>
      <p className="text-raulif-green text-xs font-mono mt-4 tracking-[0.3em] uppercase animate-pulse">
        Conectando Naturaleza
      </p>
    </div>
  );
};
