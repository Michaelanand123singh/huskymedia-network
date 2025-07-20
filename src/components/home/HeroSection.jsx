import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroImages, heroGridConfig } from '../../data/heroImages';

const HeroSection = () => {
  const [currentImages, setCurrentImages] = useState({});

  useEffect(() => {
    // Initialize with first image for each category
    const initialImages = {};
    heroGridConfig.forEach(config => {
      initialImages[config.category] = 0;
    });
    setCurrentImages(initialImages);

    // Auto-rotate images
    const interval = setInterval(() => {
      setCurrentImages(prev => {
        const newImages = { ...prev };
        heroGridConfig.forEach(config => {
          const categoryImages = heroImages[config.category];
          newImages[config.category] = (prev[config.category] + 1) % categoryImages.length;
        });
        return newImages;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 animate-fade-in">
              Where Music Meets
              <span className="block gradient-text">Digital Mastery</span>
            </h1>
            
            <p className="text-xl text-text-gray mb-8 max-w-lg animate-slide-up">
              Empowering artists with cutting-edge digital solutions, premium content creation, and industry expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Join Our Network
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-8 text-text-gray">
              <p className="text-sm">Trusted by 500+ Artists Worldwide</p>
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            {heroGridConfig.map((config, index) => (
              <div
                key={config.category}
                className={`hero-grid-item ${config.className} ${index % 2 === 0 ? 'mt-8' : ''}`}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  {heroImages[config.category].map((image, imageIndex) => (
                    <img
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      className={`hero-image absolute inset-0 ${
                        currentImages[config.category] === imageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-medium">
                      {config.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;