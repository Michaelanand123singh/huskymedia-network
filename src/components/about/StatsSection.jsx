import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Artists Served', icon: '🎤' },
    { number: '50M+', label: 'Streams Generated', icon: '📈' },
    { number: '25+', label: 'Industry Partners', icon: '🤝' },
    { number: '8+', label: 'Years Experience', icon: '⭐' }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
            Our Impact in <span className="text-red-500">Numbers</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className="text-5xl lg:text-6xl font-black text-red-500 mb-4 tracking-tight">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-xl text-white font-medium tracking-wide">
                {stat.label}
              </div>
              
              {/* Underline */}
              <div className="w-16 h-0.5 bg-gray-600 mx-auto mt-6 group-hover:bg-red-500 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;