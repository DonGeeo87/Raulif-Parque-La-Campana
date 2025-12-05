
import React, { useState, useEffect } from 'react';
import { Search, Leaf, PawPrint, Map, ArrowUpRight, Lightbulb, Info } from 'lucide-react';
import { Region, TabState } from '../types';
import { Card } from './Card';

interface RegionDetailProps {
  region: Region;
}

const FUN_FACTS = [
  "La Palma Chilena puede vivir más de 1.000 años y resistir incendios gracias a su corteza.",
  "Darwin visitó la cumbre del cerro La Campana en 1834 y quedó maravillado con la vista.",
  "El parque fue declarado Reserva de la Biosfera por la UNESCO en 1984.",
  "El zorro culpeo es esencial para controlar la población de roedores en el parque.",
  "El bosque esclerófilo es uno de los ecosistemas más amenazados del mundo."
];

export const RegionDetail: React.FC<RegionDetailProps> = ({ region }) => {
  const [activeTab, setActiveTab] = useState<TabState>(TabState.PARKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [funFact, setFunFact] = useState(FUN_FACTS[0]);

  useEffect(() => {
    // Rotate fun facts every 8 seconds
    const interval = setInterval(() => {
      const randomFact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
      setFunFact(randomFact);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const filterContent = (items: any[]) => {
    return items.filter(item => 
      (item.name || item.commonName).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.scientificName || '').toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case TabState.PARKS: 
        const filteredSectors = filterContent(region.parks);
        return (
          <div className="space-y-8 animate-fade-in">
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
               {filteredSectors.map((sector, idx) => (
                 <Card 
                   key={sector.id}
                   index={idx}
                   image={sector.imageUrl}
                   title={sector.name}
                   subtitle={sector.location}
                   description={sector.description}
                   accentColor="green"
                   badges={[
                     { label: sector.area, color: 'text-emerald-400 border-emerald-900' },
                   ]}
                 />
               ))}
             </div>
             
             {/* Interactive Booking CTA */}
             <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 p-6 md:p-8 mt-12 group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <Map size={120} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between text-center md:text-left">
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Planifica tu aventura</h4>
                        <p className="text-gray-400 max-w-xl text-sm md:text-base">El parque tiene aforo limitado para proteger el ecosistema. Asegura tu visita reservando oficialmente.</p>
                    </div>
                    <a href="https://parquenacionallacampana.cl/acceso-boletos-entradas/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-raulif-green hover:bg-emerald-400 text-black font-bold py-3 md:py-4 px-8 rounded-full transition-all active:scale-95 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2">
                      Reservar Acceso <ArrowUpRight size={20} />
                    </a>
                </div>
             </div>
          </div>
        );

      case TabState.FLORA:
        const filteredFlora = filterContent(region.flora);
        return (
          <div className="space-y-8 animate-fade-in">
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {filteredFlora.map((plant, idx) => (
                  <Card 
                    key={plant.id}
                    index={idx}
                    image={plant.imageUrl}
                    title={plant.commonName}
                    subtitle={plant.scientificName}
                    description={plant.description}
                    status={plant.status}
                    accentColor="orange"
                  />
                ))}
             </div>
          </div>
        );

      case TabState.FAUNA:
        const filteredFauna = filterContent(region.fauna);
        return (
          <div className="space-y-8 animate-fade-in">
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {filteredFauna.map((animal, idx) => (
                  <Card 
                    key={animal.id}
                    index={idx}
                    image={animal.imageUrl}
                    title={animal.commonName}
                    subtitle={animal.scientificName}
                    description={animal.description}
                    status={animal.status}
                    accentColor="blue"
                    badges={[{ label: animal.type, color: 'text-blue-300 border-blue-900' }]}
                  />
                ))}
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Immersive Hero Section */}
      <div className="relative h-[60vh] md:h-[55vh] w-full overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 bg-black">
            <img 
              src={region.coverImage} 
              alt={region.name} 
              className="w-full h-full object-cover opacity-80 animate-pulse-slow" 
              style={{ animationDuration: '30s' }} 
            />
        </div>
        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Hero Content */}
        {/* Added pb-24 to push text up so it doesn't get covered by the overlapping tabs below */}
        <div className="absolute bottom-0 left-0 w-full p-6 pb-24 md:pb-12 md:p-12 z-20">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-raulif-green/20 border border-raulif-green/50 rounded-full mb-3 backdrop-blur-md">
                        <Leaf size={12} className="text-raulif-green" />
                        <span className="text-raulif-green text-[10px] md:text-xs font-bold tracking-widest uppercase">Reserva de la Biosfera</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 tracking-tight leading-tight shadow-sm">{region.name}</h1>
                    <p className="text-gray-200 max-w-xl text-sm md:text-lg leading-relaxed drop-shadow-md">{region.description}</p>
                 </div>
                 
                 {/* Interactive Fun Fact Widget (Desktop only) */}
                 <div className="hidden md:flex flex-col bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl max-w-sm hover:bg-white/10 transition-colors cursor-help">
                    <div className="flex items-center gap-2 text-raulif-lime mb-2">
                        <Lightbulb size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">¿Sabías que?</span>
                    </div>
                    <p className="text-sm text-gray-200 italic animate-fade-in key={funFact}">"{funFact}"</p>
                 </div>
             </div>
          </div>
        </div>
      </div>

      {/* Tabs & Content Container - Overlaps Hero with negative margin */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mt-10 md:-mt-8">
        
        {/* Navigation & Search Container */}
        <div className="bg-gray-900/90 backdrop-blur-xl p-2 rounded-2xl border border-gray-800 shadow-2xl mb-8 flex flex-col md:flex-row justify-between gap-4">
          
          {/* Tabs - Optimized for mobile: smaller text, tighter padding */}
          <div className="flex bg-black/40 p-1 rounded-xl overflow-x-auto no-scrollbar snap-x snap-mandatory">
            <button 
              onClick={() => setActiveTab(TabState.PARKS)}
              className={`snap-center flex-1 md:flex-none min-w-[100px] flex items-center justify-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg text-xs md:text-sm font-bold transition-all whitespace-nowrap ${activeTab === TabState.PARKS ? 'bg-raulif-green text-black shadow-lg shadow-raulif-green/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <Map size={16} className="md:w-[18px] md:h-[18px]" /> SECTORES
            </button>
            <button 
              onClick={() => setActiveTab(TabState.FLORA)}
              className={`snap-center flex-1 md:flex-none min-w-[100px] flex items-center justify-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg text-xs md:text-sm font-bold transition-all whitespace-nowrap ${activeTab === TabState.FLORA ? 'bg-raulif-lime text-black shadow-lg shadow-raulif-lime/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <Leaf size={16} className="md:w-[18px] md:h-[18px]" /> FLORA
            </button>
            <button 
              onClick={() => setActiveTab(TabState.FAUNA)}
              className={`snap-center flex-1 md:flex-none min-w-[100px] flex items-center justify-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg text-xs md:text-sm font-bold transition-all whitespace-nowrap ${activeTab === TabState.FAUNA ? 'bg-raulif-blue text-black shadow-lg shadow-raulif-blue/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <PawPrint size={16} className="md:w-[18px] md:h-[18px]" /> FAUNA
            </button>
          </div>

          <div className="relative group flex-1 md:max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-raulif-green transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full bg-black/20 border border-transparent group-hover:border-gray-700 text-white pl-9 pr-4 py-2 md:py-3 rounded-xl focus:outline-none focus:bg-black/40 transition-all placeholder:text-gray-600 text-sm md:text-base"
            />
          </div>
        </div>

        {/* Mobile Fun Fact (Visible only on small screens) */}
        <div className="md:hidden mb-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-4 rounded-xl flex gap-3 items-start shadow-lg">
            <div className="bg-raulif-lime/10 p-2 rounded-full">
              <Lightbulb size={18} className="text-raulif-lime flex-shrink-0" />
            </div>
            <div>
              <span className="block text-[10px] text-raulif-lime font-bold uppercase tracking-wider mb-1">Dato Curioso</span>
              <p className="text-xs text-gray-300 italic leading-relaxed">"{funFact}"</p>
            </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {renderContent()}
        </div>

      </div>
    </div>
  );
};
