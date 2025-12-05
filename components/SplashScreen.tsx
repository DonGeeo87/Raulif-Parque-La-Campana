
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
      <div className="relative mb-6 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
        {/* Glow effect behind logo */}
        <div className="absolute inset-0 bg-raulif-green blur-3xl opacity-20 animate-pulse-slow"></div>
        
        {/* Logo Raulif con filtro para hacerlo visible en fondo negro */}
        <img 
          src="/logo-raulif.png" 
          alt="Raulif Logo" 
          className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_20px_rgba(16,185,129,0.4)] relative z-10 animate-pulse"
          onError={(e) => {
            // Fallback al icono si el logo no carga
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling;
            if (fallback) fallback.style.display = 'block';
          }}
        />
        
        {/* Fallback icon si el logo no carga */}
        <Fingerprint 
          size={80} 
          className="text-white relative z-10 animate-pulse hidden" 
          strokeWidth={1} 
        />
        
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
