
import React from 'react';
import { ConservationStatus } from '../types';

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  badges?: { label: string; color: string }[];
  status?: ConservationStatus;
  accentColor: 'green' | 'orange' | 'blue' | 'purple';
  index?: number; // For staggered animation
}

const getStatusColor = (status: ConservationStatus) => {
  switch (status) {
    case ConservationStatus.LC: return 'bg-green-500';
    case ConservationStatus.NT: return 'bg-yellow-400';
    case ConservationStatus.VU: return 'bg-orange-500';
    case ConservationStatus.EN: return 'bg-red-500';
    case ConservationStatus.CR: return 'bg-red-700';
    default: return 'bg-gray-500';
  }
};

const getStatusWidth = (status: ConservationStatus) => {
  switch (status) {
    case ConservationStatus.LC: return 'w-[100%]'; // Safe
    case ConservationStatus.NT: return 'w-[80%]';
    case ConservationStatus.VU: return 'w-[60%]';
    case ConservationStatus.EN: return 'w-[40%]'; // Danger
    case ConservationStatus.CR: return 'w-[20%]'; // Critical
    default: return 'w-[0%]';
  }
};

export const Card: React.FC<CardProps> = ({ image, title, subtitle, description, badges, status, accentColor, index = 0 }) => {
  
  const borderColors = {
    green: 'group-hover:border-raulif-green group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]',
    orange: 'group-hover:border-raulif-orange group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]',
    blue: 'group-hover:border-raulif-blue group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]',
    purple: 'group-hover:border-raulif-purple group-hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]',
  };

  return (
    <div 
      className={`group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:bg-gray-900/60 ${borderColors[accentColor]}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container - Formato cuadrado con relleno automático */}
      <div className="aspect-square w-full overflow-hidden relative bg-gray-950">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Floating Category/Subtitle */}
        <div className={`absolute -top-6 right-6 bg-black/80 backdrop-blur border border-gray-700 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${accentColor === 'green' ? 'text-raulif-green' : accentColor === 'orange' ? 'text-raulif-orange' : 'text-raulif-blue'}`}>
            {subtitle}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{title}</h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Conservation Status Bar (Interactive Element) */}
        {status && (
          <div className="mb-4">
            <div className="flex justify-between items-end mb-1">
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Estado de Conservación</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${getStatusColor(status)}`}>
                {status}
              </span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${getStatusColor(status)}`} 
                style={{ width: getStatusWidth(status) }}
              />
            </div>
          </div>
        )}

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {badges.map((badge, idx) => (
              <span key={idx} className={`text-xs px-2 py-1 rounded border border-gray-700 bg-gray-800/50 text-gray-300 ${badge.color}`}>
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
