import { ArrowRight } from 'lucide-react';

// Mock services data since we don't have the import
const services = [
  { id: 1, title: "Customer Support", description: "24/7 dedicated customer support for all your needs and queries", icon: "🎧", pricing: "Free" },
  { id: 2, title: "Dashboard", description: "Comprehensive analytics dashboard to track your performance", icon: "📊", pricing: "Premium" },
  { id: 3, title: "Copyright Protection", description: "Advanced copyright protection services for your content", icon: "©️", pricing: "To be discussed" },
  { id: 4, title: "Revenue Share", description: "Competitive revenue sharing model for content creators", icon: "💰", pricing: "To be discussed" },
  { id: 5, title: "Content Distribution", description: "Global content distribution across multiple platforms", icon: "🌐", pricing: "To be discussed" },
  { id: 6, title: "Analytics", description: "Detailed analytics and insights for your content performance", icon: "📈", pricing: "Free" },
  { id: 7, title: "Monetization", description: "Multiple monetization strategies to maximize your revenue", icon: "💎", pricing: "Commission based" },
  { id: 8, title: "Marketing Support", description: "Professional marketing support to grow your audience", icon: "📢", pricing: "To be discussed" },
  { id: 9, title: "Technical Support", description: "Expert technical support for all your technical issues", icon: "🔧", pricing: "Free" }
];

const ServicesPreview = () => {
  // Select 4 key services for the pillars layout
  const pillarServices = [
    services.find(s => s.title === "Customer Support") || services[0],
    services.find(s => s.title === "Dashboard") || services[1],
    services.find(s => s.title === "Copyright Protection") || services[2],
    services.find(s => s.title === "Revenue Share") || services[3]
  ];

  const getServiceIcon = (title) => {
    switch(title) {
      case "Customer Support": return "🎧";
      case "Dashboard": return "📊";
      case "Copyright Protection": return "©️";
      case "Revenue Share": return "💰";
      default: return "🔧";
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            PILLARS OF <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">SUPPORT</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Husky Media Network helps you! Here's how
          </p>
        </div>

        {/* Pillars Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Layout - Hexagonal Flow */}
          <div className="hidden lg:block">
            <div className="relative flex items-center justify-between min-h-[400px]">
              
              {/* First Pillar */}
              <div className="flex flex-col items-center">
                <div className="text-sm font-bold text-white mb-4 text-center max-w-[150px]">
                  {pillarServices[0].title.toUpperCase().replace(' ', '\n& ')}
                </div>
                <div className="hexagon-container relative">
                  <div className="hexagon bg-black border-4 border-gray-300">
                    <div className="hexagon-content">
                      <span className="text-4xl text-white">
                        {getServiceIcon(pillarServices[0].title)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Line 1 */}
              <div className="flex-1 h-1 bg-gray-400 mx-8"></div>

              {/* Second Pillar */}
              <div className="flex flex-col items-center">
                <div className="hexagon-container relative mb-4">
                  <div className="hexagon bg-red-500">
                    <div className="hexagon-content">
                      <span className="text-4xl text-white">📈</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-bold text-white text-center">
                  MARKETING
                </div>
              </div>

              {/* Connection Line 2 */}
              <div className="flex-1 h-1 bg-gray-400 mx-8"></div>

              {/* Third Pillar */}
              <div className="flex flex-col items-center">
                <div className="text-sm font-bold text-white mb-4 text-center">
                  TECHNOLOGY
                </div>
                <div className="hexagon-container relative">
                  <div className="hexagon bg-black border-4 border-gray-300">
                    <div className="hexagon-content">
                      <span className="text-4xl text-white">
                        {getServiceIcon(pillarServices[1].title)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Line 3 */}
              <div className="flex-1 h-1 bg-gray-400 mx-8"></div>

              {/* Fourth Pillar */}
              <div className="flex flex-col items-center">
                <div className="hexagon-container relative mb-4">
                  <div className="hexagon bg-red-500">
                    <div className="hexagon-content">
                      <span className="text-4xl text-white">⚖️</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-bold text-white text-center max-w-[150px]">
                  OPERATIONS &<br />LEGAL
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Vertical Stack */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {pillarServices.map((service, index) => (
                <div key={service.id} className="flex flex-col items-center text-center">
                  <div className="hexagon-container relative mb-6">
                    <div className={`hexagon ${index % 2 === 0 ? 'bg-black border-4 border-gray-300' : 'bg-red-500'}`}>
                      <div className="hexagon-content">
                        <span className="text-4xl text-white">
                          {getServiceIcon(service.title)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    {service.description.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid - Additional Services */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            Additional <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Services</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(4, 9).map((service) => (
              <div key={service.id} className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-red-500 transition-colors group cursor-pointer">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-red-500 font-semibold">
                    {service.pricing}
                  </span>
                  <ArrowRight className="w-5 h-5 text-red-500 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CSS Styles for Hexagons */}
      <style jsx>{`
        .hexagon-container {
          width: 120px;
          height: 120px;
        }

        .hexagon {
          width: 100%;
          height: 100%;
          position: relative;
          transform: rotate(30deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hexagon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          border: inherit;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .hexagon-content {
          position: relative;
          z-index: 2;
          transform: rotate(-30deg);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1024px) {
          .hexagon-container {
            width: 100px;
            height: 100px;
          }
        }

        @media (max-width: 768px) {
          .hexagon-container {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesPreview;