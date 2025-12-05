
import React from 'react';
import { Fingerprint } from 'lucide-react';

interface HeaderProps {
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="w-full py-3 md:py-4 px-4 md:px-8 flex justify-between items-center border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-[100]">
      <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={onLogoClick || (() => window.scrollTo(0, 0))}>
        {/* Logo Container - Más grande sin texto */}
        <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            {/* Logo Raulif con filtro para hacerlo visible en fondo negro */}
            <img 
              src={`${import.meta.env.BASE_URL}logo-raulif.png`}
              alt="Raulif Logo" 
              className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] transition-all duration-300"
              onError={(e) => {
                // Fallback al icono si el logo no carga
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            {/* Fallback icon si el logo no carga */}
            <Fingerprint 
              className="text-white group-hover:text-raulif-green transition-colors hidden" 
              size={48} 
              strokeWidth={1.5} 
            />
            {/* Punto verde parpadeando siempre visible */}
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-raulif-green rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
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