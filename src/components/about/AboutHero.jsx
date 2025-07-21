import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-12">
            {/* Corporate Badge */}
            <div className="inline-flex items-center px-6 py-3 border border-red-600 rounded">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
              <span className="text-red-600 text-sm font-semibold tracking-wider uppercase">
                Industry Leader Since 2016
              </span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block text-red-600">
                  About us
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-red-600"></div>
            </div>
            
            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Husky Media Network stands as the premier multi-channel network platform, 
              delivering enterprise-grade solutions for content creators worldwide. We combine 
              strategic expertise with cutting-edge technology to drive measurable growth.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-12 py-12 border-t border-b border-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Active Channels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2.5B+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Monthly Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            {/* Main Corporate Image */}
            <div className="relative bg-gray-900 rounded border border-gray-800 overflow-hidden h-96">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-600 mb-4">HMN</div>
                  <div className="text-gray-400 text-lg">Global Network</div>
                </div>
              </div>
              
              {/* Corporate Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/80 border border-gray-700 rounded p-6">
                  <div className="text-white font-semibold mb-1">Global Headquarters</div>
                  <div className="text-gray-300 text-sm">Driving digital transformation worldwide</div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-8 -right-8 bg-red-600 rounded p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">95%</div>
                <div className="text-red-100 text-sm">Satisfaction</div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-8 -left-8 bg-black border border-red-600 rounded p-6">
              <div className="text-center">
                <div className="text-xl font-bold text-red-600">8+</div>
                <div className="text-gray-300 text-xs uppercase">Years</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Corporate Certifications */}
        <div className="mt-14">
          <div className="text-center mb-12">
            <div className="text-sm text-gray-500 uppercase tracking-wider">Recognized Excellence</div>
          </div>
          <div className="flex justify-center items-center space-x-16 opacity-60">
            <div className="text-gray-400 font-medium">YouTube Certified Partner</div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-gray-400 font-medium">Digital Marketing Awards 2024</div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-gray-400 font-medium">Top MCN Platform</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-red-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default AboutHero;