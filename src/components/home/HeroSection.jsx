import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroImages, heroGridConfig } from '../../data/heroImages';

const HeroSection = () => {
  const [currentImages, setCurrentImages] = useState({});
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    // Initialize with first image for each category
    const initialImages = {};
    heroGridConfig.forEach(config => {
      initialImages[config.category] = 0;
    });
    setCurrentImages(initialImages);

    // Auto-rotate images and active card
    const interval = setInterval(() => {
      setCurrentImages(prev => {
        const newImages = { ...prev };
        heroGridConfig.forEach(config => {
          const categoryImages = heroImages[config.category];
          newImages[config.category] = (prev[config.category] + 1) % categoryImages.length;
        });
        return newImages;
      });
      setActiveCard(prev => (prev + 1) % heroGridConfig.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-red-900/20 to-blue-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-16 relative z-10 min-h-screen flex items-center">

        {/* Cinematic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-32">
          {heroGridConfig.map((config, index) => (
            <div
              key={config.category}
              className={`relative group cursor-pointer transform transition-all duration-700 ${
                activeCard === index 
                  ? 'scale-105 lg:scale-110 z-30' 
                  : 'scale-95 hover:scale-100'
              }`}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Main Poster Card */}
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-black shadow-2xl">
                
                {/* Background Image with Transitions */}
                <div className="absolute inset-0">
                  {heroImages[config.category].map((image, imageIndex) => (
                    <img
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        currentImages[config.category] === imageIndex 
                          ? 'opacity-80 scale-100' 
                          : 'opacity-0 scale-110'
                      }`}
                    />
                  ))}
                  
                  {/* Cinematic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-red-600/20 mix-blend-multiply" />
                  
                  {/* Active Card Special Effects */}
                  {activeCard === index && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-purple-400/20 animate-pulse" />
                      <div className="absolute inset-0 ring-2 ring-yellow-400/50 ring-inset rounded-2xl" />
                    </>
                  )}
                </div>

                {/* Content Layout */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  
                  {/* Top Badge */}
                  <div className="flex justify-between items-start">
                    <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-md">
                      PREMIUM
                    </div>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full" />
                    </div>
                  </div>

                  {/* Center Logo Area */}
                  <div className="text-center flex-1 flex items-center justify-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto bg-black/50 backdrop-blur-md rounded-full border-2 border-white/40 flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Title Section */}
                  <div className="text-center space-y-3">
                    <h2 className="text-2xl lg:text-3xl font-black text-white tracking-wider drop-shadow-lg">
                      {config.title}
                    </h2>
                    <p className="text-white/90 font-semibold text-sm tracking-wide">
                      {config.subtitle}
                    </p>
                    
                    
                  </div>
                </div>

                {/* Side Accent Lines */}
                <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-yellow-400 to-transparent opacity-60" />
                <div className="absolute right-0 top-1/3 w-1 h-1/3 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;