// FeaturedArtist.jsx
import { useState, useEffect } from 'react';
import { featuredArtists } from '../../data/artists';
import { Star, Play, Users, TrendingUp } from 'lucide-react';

const FeaturedArtist = () => {
  const [shuffledArtists, setShuffledArtists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Shuffle the artists array randomly
    const shuffled = [...featuredArtists].sort(() => Math.random() - 0.5);
    setShuffledArtists(shuffled);
  }, []);

  // Auto-rotate featured artists every 5 seconds
  useEffect(() => {
    if (shuffledArtists.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === shuffledArtists.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [shuffledArtists.length]);

  if (!shuffledArtists.length) return null;

  const currentArtist = shuffledArtists[currentIndex];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-red-500" />
            <span className="text-red-500 font-semibold uppercase tracking-wide">Featured</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
            Featured Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of talented artists making waves in the industry
          </p>
        </div>

        {/* Hero Featured Artist */}
        <div className="mb-16">
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group">
            <img 
              src={currentArtist.image} 
              alt={currentArtist.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                    Featured Artist
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {currentArtist.stats.followers}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      {currentArtist.stats.growth}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white mb-4">
                  {currentArtist.name}
                </h3>
                
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  {currentArtist.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentArtist.genre.map((genre, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
                
                
              </div>
            </div>

            {/* Navigation dots */}
            {shuffledArtists.length > 1 && (
              <div className="absolute bottom-6 right-6 flex gap-2">
                {shuffledArtists.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentIndex ? 'bg-red-500' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default FeaturedArtist;