
import React from 'react';
import { Fingerprint } from 'lucide-react';

interface HeaderProps {
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="w-full py-3 md:py-4 px-4 md:px-8 flex justify-between items-center border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-[100]">
      <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={onLogoClick || (() => window.scrollTo(0, 0))}>
        {/* Logo Container */}
        <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            {/* Using a stylistic Icon to represent the logo provided in the prompt until the SVG file is locally hosted */}
            <Fingerprint className="text-white group-hover:text-raulif-green transition-colors" size={28} strokeWidth={1.5} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-raulif-green rounded-full animate-pulse"></div>
        </div>
        
        {/* Text Logo */}
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-light tracking-wide text-white font-sans">Raulif</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm font-medium">
        <a href="https://raulif.com" target="_blank" rel="noopener noreferrer" className="hidden md:block text-gray-400 hover:text-white transition-colors">
          Nosotros
        </a>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider">
              <span className="md:hidden">NFC ON</span>
              <span className="hidden md:inline">Conexión NFC Activa</span>
            </span>
        </div>
      </div>
    </header>
  );
};