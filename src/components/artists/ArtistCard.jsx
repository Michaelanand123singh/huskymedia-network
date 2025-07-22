// ArtistCard.jsx
import React from 'react';

const ArtistCard = ({ artist, size = 'medium', showDetails = false }) => {
  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:row-span-2 h-96 md:h-[500px]';
      case 'medium':
        return 'h-80 md:h-96';
      case 'small':
        return 'h-64 md:h-80';
      default:
        return 'h-80';
    }
  };

  return (
    <div className={`group cursor-pointer ${getSizeClasses(size)}`}>
      <div className="relative h-full overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-all duration-300">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Artist info overlay on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-semibold text-lg drop-shadow-lg">
            {artist.name}
          </h3>
          <div className="w-8 h-0.5 bg-red-500 mt-1 mb-2"></div>
          
          {showDetails && (
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                {artist.genre.map((g, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded">
                    {g}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>{artist.stats.followers} followers</span>
                <span className="text-green-400">{artist.stats.growth}</span>
              </div>
            </div>
          )}
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            artist.status === 'Featured' ? 'bg-red-500 text-white' :
            artist.status === 'Rising' ? 'bg-yellow-500 text-black' :
            'bg-blue-500 text-white'
          }`}>
            {artist.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;