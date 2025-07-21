import React, { useState } from 'react';

const BenefitsSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const benefits = [
    {
      icon: '💰',
      title: 'Advanced Monetization Tools',
      description: 'Maximize revenue potential with our comprehensive suite of monetization strategies and optimization tools.',
      stat: '↑ 340%',
      statLabel: 'Avg Revenue Increase'
    },
    {
      icon: '🎬',
      title: 'Professional Content Creation Support',
      description: 'Access to professional editing, graphics design, and content strategy consultation services.',
      stat: '24/7',
      statLabel: 'Creative Support'
    },
    {
      icon: '🌐',
      title: 'Global Audience Network Access',
      description: 'Connect with worldwide audiences through our established network of 500+ creators across 150+ countries.',
      stat: '150+',
      statLabel: 'Countries Reached'
    },
    {
      icon: '🤝',
      title: 'Brand Partnership Opportunities',
      description: 'Exclusive access to premium brand collaborations and sponsored content opportunities.',
      stat: '$2M+',
      statLabel: 'Partnership Value'
    },
    {
      icon: '📈',
      title: 'Analytics & Growth Insights',
      description: 'Data-driven insights and performance analytics to optimize your content strategy and audience engagement.',
      stat: '95%',
      statLabel: 'Growth Accuracy'
    },
    {
      icon: '🛡️',
      title: 'Rights Management & Protection',
      description: 'Complete copyright protection, content ID management, and legal support for your creative assets.',
      stat: '100%',
      statLabel: 'Protection Rate'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-red-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-red-500 blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Header with Custom Typography */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">
              WHY CHOOSE
            </h2>
            <div className="text-4xl lg:text-5xl font-black text-red-500 mb-6 tracking-tight relative">
              HUSKY MEDIA
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-red-400 to-red-500"></div>
            </div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6 font-light">
            Six pillars of excellence that set us apart in the digital media landscape
          </p>
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 transition-all duration-500 cursor-pointer
                  ${index % 2 === 0 ? 'lg:transform lg:translate-y-4' : ''}
                  ${activeCard === index ? 'scale-105 bg-gradient-to-br from-red-900/20 to-gray-800' : ''}
                  hover:scale-105`}
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
                  minHeight: '220px'
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Hexagon Border Effect */}
                <div className="absolute inset-1 bg-black transition-all duration-500 group-hover:bg-red-500/5"
                     style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)' }}>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full justify-center px-3">
                  <div className="text-3xl mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {benefit.icon}
                  </div>
                  
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <div className={`transition-all duration-500 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="border-t border-red-500/30 pt-2">
                      <div className="text-lg font-bold text-red-400">{benefit.stat}</div>
                      <div className="text-xs text-gray-400">{benefit.statLabel}</div>
                    </div>
                  </div>
                  
                  {activeCard !== index && (
                    <div className="text-xs text-gray-500 mt-1">Hover to explore</div>
                  )}
                </div>

                {/* Glowing Border on Hover */}
                <div className={`absolute inset-0 transition-all duration-300 ${activeCard === index ? 'shadow-xl shadow-red-500/15' : ''}`}
                     style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)' }}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;