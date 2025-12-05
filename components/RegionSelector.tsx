import React from 'react';
import { CHILE_DATA } from '../constants';
import { Region } from '../types';
import { MapPin } from 'lucide-react';

interface RegionSelectorProps {
  onSelectRegion: (region: Region) => void;
}

export const RegionSelector: React.FC<RegionSelectorProps> = ({ onSelectRegion }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16 space-y-4 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Explora Chile por Zona
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Selecciona una región geográfica para descubrir su biodiversidad única, parques protegidos y tesoros naturales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CHILE_DATA.map((region) => (
          <div 
            key={region.id}
            onClick={() => onSelectRegion(region)}
            className="group cursor-pointer relative h-96 rounded-2xl overflow-hidden border border-gray-800 hover:border-raulif-green transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={region.coverImage} 
                alt={region.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <MapPin size={16} className="text-raulif-green" />
                  <span className="text-raulif-green text-xs font-bold tracking-widest uppercase">Explorar</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {region.shortName}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {region.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};