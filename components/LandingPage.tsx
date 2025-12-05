
import React from 'react';
import { ArrowRight, Smartphone, Globe, Leaf } from 'lucide-react';

interface LandingPageProps {
  onStartExperience: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartExperience }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section - Using dvh for better mobile browser support */}
      <div className="relative flex-1 flex items-center justify-center min-h-[100dvh] overflow-hidden">
        {/* Abstract/Nature Background */}
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/cover-la-campana.jpg`}
            alt="Parque Nacional La Campana" 
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              // Fallback a Unsplash si la imagen local no existe
              e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6 md:space-y-8 mt-[-10vh]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-raulif-green/10 border border-raulif-green/30 text-raulif-green text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-4">
            <span className="w-2 h-2 rounded-full bg-raulif-green animate-pulse"></span>
            Tecnología y Naturaleza
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-tight">
            Conecta con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-raulif-green via-raulif-lime to-raulif-green">
              lo natural
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Raulif transforma la manera en que interactúas con los parques nacionales. 
            Vive una experiencia de aprendizaje inmersiva única.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 md:mt-12 w-full max-w-md mx-auto sm:max-w-none">
            <button 
              onClick={onStartExperience}
              className="w-full sm:w-auto group relative px-8 py-4 bg-raulif-green text-black font-bold rounded-full text-lg transition-all hover:scale-105 active:scale-95 hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] flex items-center justify-center gap-3"
            >
              Explorar La Campana
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://raulif.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full text-lg transition-all hover:bg-white/10 flex items-center justify-center"
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-black py-16 md:py-20 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-raulif-green">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Interacción Digital</h3>
            <p className="text-gray-400">Escanea, identifica y aprende sobre la flora y fauna en tiempo real con nuestra tecnología.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-raulif-lime">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Conciencia Ecológica</h3>
            <p className="text-gray-400">Fomentamos la conservación a través del conocimiento profundo de nuestros ecosistemas.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-raulif-blue">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Comunidad Global</h3>
            <p className="text-gray-400">Únete a miles de exploradores compartiendo sus descubrimientos en parques nacionales.</p>
          </div>
        </div>
      </div>
    </div>
  );
};