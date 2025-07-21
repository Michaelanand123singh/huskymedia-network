// FeaturedArtist.jsx
import { useState, useEffect } from 'react';
import { featuredArtists } from '../../data/artists';

const FeaturedArtist = () => {
  const [shuffledArtists, setShuffledArtists] = useState([]);

  useEffect(() => {
    // Shuffle the artists array randomly
    const shuffled = [...featuredArtists].sort(() => Math.random() - 0.5);
    setShuffledArtists(shuffled);
  }, []);

  if (!shuffledArtists.length) return null;

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
            Featured Gallery
          </h2>
          <p className="text-lg text-gray-300">
            Discover our featured collection
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffledArtists.map((artist, index) => {
            // Vary the heights for masonry effect
            const heights = ['h-80', 'h-96', 'h-64', 'h-[400px]', 'h-72'];
            const randomHeight = heights[index % heights.length];
            
            return (
              <div 
                key={artist.id} 
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${randomHeight} border border-gray-800 hover:border-red-500 transition-all duration-300`}
              >
                <div className="relative h-full">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Name overlay on hover */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {artist.name}
                    </h3>
                    <div className="w-12 h-1 bg-red-500 mt-2"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtist;