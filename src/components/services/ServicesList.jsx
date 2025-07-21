import React, { useState, useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const ServicesList = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef();

  const handleToggle = (serviceId) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Professional solutions delivered through our proven methodology
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/0 via-red-500/50 to-red-500/0 transform -translate-x-px hidden lg:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleCards.has(index);
              
              return (
                <div
                  key={service.id}
                  data-index={index}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-16`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-6 w-4 h-4 bg-red-500 rounded-full border-4 border-black transform -translate-x-1/2 z-10 hidden lg:block">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-1/2 w-full ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div 
                      className={`
                        bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 
                        hover:border-red-500/30 hover:bg-gray-900 transition-all duration-500 
                        hover:shadow-lg hover:shadow-red-500/10 group relative overflow-hidden
                        ${isVisible 
                          ? `animate-fade-in-${isEven ? 'left' : 'right'}` 
                          : 'opacity-0 translate-y-8'
                        }
                      `}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-red-500 text-sm font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed mb-3">
                            {service.description}
                          </p>
                        </div>
                        
                        <button
                          onClick={() => handleToggle(service.id)}
                          className="ml-4 w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group-hover:scale-110"
                        >
                          <svg 
                            className={`w-4 h-4 text-gray-400 group-hover:text-red-500 transition-all duration-300 ${
                              expandedCard === service.id ? 'rotate-180' : ''
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Price Badge */}
                      <div className="inline-block bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1 mb-4">
                        <span className="text-red-400 text-sm font-medium">{service.price || 'Custom Pricing'}</span>
                      </div>

                      {/* Expanded Content */}
                      {expandedCard === service.id && (
                        <div className="border-t border-gray-800/50 pt-4 animate-expand">
                          <div className="space-y-2 mb-4">
                            {service.features?.map((feature, featureIndex) => (
                              <div 
                                key={featureIndex} 
                                className="flex items-center text-sm text-gray-300 animate-fade-in-up"
                                style={{ animationDelay: `${featureIndex * 0.05}s` }}
                              >
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                                {feature}
                              </div>
                            )) || (
                              <div className="text-sm text-gray-400">
                                Contact us for detailed feature information
                              </div>
                            )}
                          </div>
                          <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-4 rounded-md hover:from-red-700 hover:to-red-600 transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-red-500/20">
                            Learn More
                          </button>
                        </div>
                      )}

                      {/* Hover Accent */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
                    </div>
                  </div>

                  {/* Timeline Connector */}
                  <div className={`hidden lg:block w-16 h-0.5 bg-gradient-to-r ${
                    isEven 
                      ? 'from-transparent to-red-500/30' 
                      : 'from-red-500/30 to-transparent'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }

        .animate-expand {
          animation: expand 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServicesList;