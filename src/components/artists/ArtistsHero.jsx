import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';

const ArtistsHero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filters = ['All', 'Featured', 'Rising', 'Established'];

  // Professional artist/studio background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop&crop=center&sat=-100',
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1920&h=1080&fit=crop&crop=center'
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Animated Title */}
          <div className="mb-8 transform animate-fadeInUp">
            <h1 className="font-black text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight">
              <span className="inline-block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-shimmer">
                Our
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-pulse">
                Artists
              </span>
            </h1>
          </div>

          {/* Subtitle with Typewriter Effect */}
          <div className="mb-12 transform animate-fadeInUp animation-delay-300">
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-light tracking-wide leading-relaxed">
              Discover talented artists who trust us to amplify their music and grow their careers
            </p>
          </div>
          
          {/* Premium Search and Filter Section */}
          <div className="transform animate-fadeInUp animation-delay-500">

            {/* Premium Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { number: '500+', label: 'Artists Worldwide', delay: '600ms' },
                { number: '10M+', label: 'Monthly Streams', delay: '800ms' },
                { number: '25%', label: 'Average Growth Rate', delay: '1000ms' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group transform animate-fadeInUp hover:scale-110 transition-all duration-500"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300">
                    <h3 className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-red-400 group-hover:to-red-500 transition-all duration-300">
                      {stat.number}
                    </h3>
                    <p className="text-gray-300 font-light tracking-wide group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-red-400 scale-125 shadow-lg shadow-red-400/50' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .duration-2000 {
          transition-duration: 2000ms;
        }
      `}</style>
    </section>
  );
};

export default ArtistsHero;