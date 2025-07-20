import { useState, useEffect } from 'react';
import { partners } from '../../data/partner';

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisiblePartners = () => {
    const partnersPerSlide = 3;
    const startIndex = currentIndex * partnersPerSlide;
    return partners.slice(startIndex, startIndex + partnersPerSlide);
  };

  return (
    <section className="py-20 bg-primary-black border-y border-primary-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Trusted <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional results for our artists.
          </p>
        </div>

        {/* Animated Partners Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center space-x-12 lg:space-x-16">
            {getVisiblePartners().map((partner, index) => (
              <div
                key={`${partner.id}-${currentIndex}`}
                className="partner-logo-container animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo h-16 lg:h-20 object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
                <div className="partner-overlay">
                  <h3 className="text-sm font-semibold text-white mb-1">{partner.name}</h3>
                  <p className="text-xs text-text-gray">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-gold mb-2">50+</div>
            <div className="text-text-gray text-sm">Industry Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-gold mb-2">100M+</div>
            <div className="text-text-gray text-sm">Combined Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-gold mb-2">5+</div>
            <div className="text-text-gray text-sm">Years Partnership</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-gold mb-2">24/7</div>
            <div className="text-text-gray text-sm">Global Support</div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-charcoal px-6 py-3 rounded-full border border-primary-gray">
            <div className="w-2 h-2 bg-secondary-gold rounded-full animate-pulse"></div>
            <span className="text-text-gray text-sm">
              Exclusive access to industry networks and opportunities
            </span>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-secondary-gold scale-110' : 'bg-primary-gray hover:bg-secondary-blue'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;