import React from 'react';
import { X, MapPin } from 'lucide-react';
import { CHILE_DATA } from '../constants';
import { Park } from '../types';

interface AllParksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AllParksModal: React.FC<AllParksModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Flatten all parks into a single array
  const allParks = CHILE_DATA.reduce<{ park: Park; regionName: string }[]>((acc, region) => {
    return acc.concat(region.parks.map(p => ({ park: p, regionName: region.name })));
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="bg-gray-900 border border-gray-800 w-full max-w-6xl max-h-[90vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900 sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Parques Nacionales de Chile</h2>
            <p className="text-raulif-green text-sm">Total registrados en la plataforma: {allParks.length}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allParks.map((item, index) => (
            <div key={`${item.park.id}-${index}`} className="flex gap-4 p-4 rounded-xl border border-gray-800 bg-black/40 hover:bg-gray-800/40 hover:border-raulif-green transition-all group">
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                 <img src={item.park.imageUrl} alt={item.park.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-white leading-tight mb-1">{item.park.name}</h3>
                <div className="flex items-start gap-1 text-gray-400 text-xs mb-1">
                  <MapPin size={12} className="mt-0.5" />
                  <span>{item.park.location}</span>
                </div>
                <span className="text-xs text-raulif-green font-mono">{item.park.area}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 bg-gray-900 text-center text-xs text-gray-500">
           © Raulif - Naturaleza Viva
        </div>
      </div>
    </div>
  );
};