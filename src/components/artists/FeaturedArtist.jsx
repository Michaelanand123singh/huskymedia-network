import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Award, TrendingUp } from 'lucide-react';
import { featuredArtists } from '../../data/artists';

const FeaturedArtist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % featuredArtists.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % featuredArtists.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + featuredArtists.length) % featuredArtists.length);
  };

  const currentArtist = featuredArtists[currentIndex];

  if (!currentArtist) return null;

  return (
    <section className="relative py-20 bg-primary-charcoal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={currentArtist.image} 
          alt={currentArtist.name}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artist Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-secondary-gold text-primary-black px-4 py-2 rounded-full text-sm font-bold">
                Featured Artist
              </span>
              <div className="flex items-center gap-2 text-text-gray">
                <Calendar className="w-4 h-4" />
                <span>Joined {currentArtist.joinedDate}</span>
              </div>
            </div>

            <h2 className="font-heading text-4xl md:text-6xl font-black">
              {currentArtist.name}
            </h2>

            <div className="flex flex-wrap gap-2">
              {currentArtist.genre.map((g, index) => (
                <span key={index} className="bg-primary-gray px-3 py-1 rounded-full text-sm">
                  {g}
                </span>
              ))}
            </div>

            <p className="text-lg text-text-gray leading-relaxed">
              {currentArtist.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-primary-gray">
              <div>
                <p className="text-2xl font-bold gradient-text">{currentArtist.stats.followers}</p>
                <p className="text-text-gray">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">{currentArtist.stats.streams}</p>
                <p className="text-text-gray">Streams</p>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary-gold" />
                <div>
                  <p className="text-2xl font-bold text-secondary-gold">{currentArtist.stats.growth}</p>
                  <p className="text-text-gray">Growth</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-secondary-gold" />
                <h4 className="font-semibold text-lg">Key Achievements</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentArtist.achievements.map((achievement, index) => (
                  <span key={index} className="bg-secondary-gold/10 border border-secondary-gold/30 text-secondary-gold px-3 py-1 rounded-lg text-sm">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Artist Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <img 
                src={currentArtist.image} 
                alt={currentArtist.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-primary-gray hover:bg-secondary-gold hover:text-primary-black transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {featuredArtists.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-secondary-gold' : 'bg-primary-gray'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-primary-gray hover:bg-secondary-gold hover:text-primary-black transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtist;