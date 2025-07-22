import { useState, useEffect } from 'react';

// Import your actual logo images - make sure these paths match your folder structure
import anamikatv from '../../assets/partners/anamikatv.jpg';
import bhumi from '../../assets/partners/bhumi.jpg';
import bollywoodkilla from '../../assets/partners/bollywoodkilla.jpg';
import cinema from '../../assets/partners/cinemaj.jpg';
import hindimoralstories from '../../assets/partners/hindimoralstories.jpg';
import lgfstudio from '../../assets/partners/lgfstudios.jpg';
import macdocsfilms from '../../assets/partners/macdocsfilms.jpg';
import raushanrohi from '../../assets/partners/raushanrohi.jpg';
import telguvideos from '../../assets/partners/telguvideos.jpg';

const partners = [
  {
    id: 1,
    name: "Anamika TV",
    logo: anamikatv,
    type: "Production Partner"
  },
  {
    id: 2,
    name: "Bhumi Records Magahi",
    logo: bhumi,
    type: "Content Partner"
  },
  {
    id: 3,
    name: "Bollywood Killa",
    logo: bollywoodkilla,
    type: "Technology Partner"
  },
  {
    id: 4,
    name: "Cinema Productions",
    logo: cinema,
    type: "Creative Partner"
  },
  {
    id: 5,
    name: "Hindi Moral Stories",
    logo: hindimoralstories, // Using existing logo as placeholder
    type: "Distribution Partner"
  },
  {
    id: 6,
    name: "lgfsstudios",
    logo: lgfstudio, // Using existing logo as placeholder
    type: "Infrastructure Partner"
  },
  {
    id: 7,
    name: "macdocsfilms",
    logo: macdocsfilms,
    type: "partners"
  },
  {
    id: 8,
    name: "raushanrohi",
    logo: raushanrohi,
    type: "partner"
  },
  {
    id: 9,
    name: "telguVideos",
    logo: telguvideos,
    type: "partner",
  },
  // Duplicating for continuous scroll effect
  {
    id: 7,
    name: "RK Studios",
    logo: cinema,
    type: "Production Partner"
  },
  {
    id: 8,
    name: "Maddock Films",
    logo: bollywoodkilla,
    type: "Content Partner"
  }
];

const PartnersSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const maxScroll = (partners.length / 2) * 280;
        return prev >= maxScroll ? 0 : prev + 1;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-black border-y border-gray-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header with custom asymmetric layout */}
        <div className="mb-12">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-5">
                <div className="w-1 h-14 bg-gradient-to-b from-red-500 to-red-700 mr-6 rounded-full"></div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    Trusted <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Partners</span>
                  </h2>
                  <p className="text-base text-gray-400 max-w-xl">
                    Collaborating with industry leaders to deliver exceptional results for our artists.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Executive summary card */}
            <div className="hidden lg:block ml-6">
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 min-w-[160px]">
                <div className="text-center">
                  <div className="text-xl font-bold text-red-500 mb-1">50+</div>
                  <div className="text-xs text-gray-400">Active Partners</div>
                  <div className="w-full h-px bg-gray-700 my-2"></div>
                  <div className="text-xs text-gray-500">Global Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scrolling container with custom styling */}
        <div className="relative mb-12">
          {/* Custom gradient overlays */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black via-black to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black via-black to-transparent z-20 pointer-events-none"></div>
          
          <div className="overflow-hidden bg-gray-900 rounded-2xl border border-gray-700 py-8 relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-3 left-1/4 w-20 h-20 border border-gray-600 rounded-full"></div>
              <div className="absolute bottom-3 right-1/3 w-16 h-16 border border-gray-600 rounded-full"></div>
            </div>
            
            <div 
              className="flex items-center space-x-8 transition-transform duration-75 ease-linear relative z-10"
              style={{ 
                transform: `translateX(-${scrollPosition}px)`,
                width: `${partners.length * 240}px`
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-48 h-24 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center p-4 hover:bg-gray-750 hover:border-red-500 transition-all duration-300 group relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(`${partner.id}-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-700/10 transition-opacity duration-300 ${hoveredCard === `${partner.id}-${index}` ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  <div className="text-center relative z-10 w-full">
                    {/* Logo Image */}
                    <div className="w-full h-12 bg-white/5 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        style={{ maxWidth: '100px', maxHeight: '40px' }}
                      />
                    </div>
                    
                    {/* Partner Type */}
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      {partner.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom metrics layout */}
        <div className="mb-12">
          <div className="bg-gray-900 rounded-2xl border border-gray-700 p-8 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              <div className="text-center group">
                <div className="text-2xl font-bold text-red-500 mb-2 group-hover:scale-105 transition-transform">50+</div>
                <div className="text-gray-400 text-xs font-medium">Industry Partners</div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mt-2"></div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-red-500 mb-2 group-hover:scale-105 transition-transform">100M+</div>
                <div className="text-gray-400 text-xs font-medium">Combined Reach</div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mt-2"></div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-red-500 mb-2 group-hover:scale-105 transition-transform">5+</div>
                <div className="text-gray-400 text-xs font-medium">Years Partnership</div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mt-2"></div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-red-500 mb-2 group-hover:scale-105 transition-transform">24/7</div>
                <div className="text-gray-400 text-xs font-medium">Global Support</div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CTA section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gray-900 border border-gray-700 px-6 py-3 rounded-xl group hover:border-red-500 transition-all duration-300">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-gray-400 text-xs font-medium group-hover:text-gray-300 transition-colors">
                Exclusive access to industry networks and opportunities
              </span>
            </div>
            <svg className="w-4 h-4 text-gray-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;