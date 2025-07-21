import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900 opacity-90"></div>
      
      {/* Top Navigation */}
      <div className="relative z-10 flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-white font-medium">Welcome to MCN Services</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center min-h-screen py-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center w-full">
            
            {/* Left Content - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-fade-in">
                <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  YouTube MCN
                  <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                    Services
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Everything you need to grow, protect, and monetize your content with our comprehensive multi-channel network solutions.
                </p>

                {/* Stats Row */}
                <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-gray-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-sm text-gray-400">Creators</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Global</div>
                    <div className="text-sm text-gray-400">Reach</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Area - 3 columns */}
            <div className="lg:col-span-3 relative h-96 lg:h-[600px]">
              
              {/* Central Figure */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Person silhouette/placeholder */}
                  <div className="w-72 h-96 bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="text-sm">Content Creator</div>
                    </div>
                  </div>
                  
                  {/* Laptop/Dashboard in hands */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-48 h-32 bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-3">
                      <div className="w-full h-full bg-black rounded flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-red-500 text-xs mb-1">MCN Dashboard</div>
                          <div className="w-24 h-1 bg-red-500 rounded mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Dashboard Cards */}
              
              {/* Analytics Overview - Top Left */}
              <div className="absolute top-8 left-8 w-48 bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-2xl animate-float" 
                   style={{animationDelay: '0s'}}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Analytics Overview</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Views</span>
                    <span className="text-sm text-white font-semibold">2.4M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Revenue</span>
                    <span className="text-sm text-red-400 font-semibold">$12,450</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                    <div className="bg-red-500 h-1.5 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Notification Panel - Top Right */}
              <div className="absolute top-16 right-8 w-40 bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-2xl animate-float"
                   style={{animationDelay: '0.5s'}}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400">New Insights</span>
                </div>
                <div className="text-sm text-white mb-1">Performance Up</div>
                <div className="text-xs text-gray-500">Week 1 - Nov 27</div>
                <div className="mt-2 flex space-x-1">
                  {[1,2,3,4,5,6,7].map((day) => (
                    <div key={day} className="w-3 h-8 bg-gray-800 rounded-sm relative">
                      <div 
                        className="absolute bottom-0 w-full bg-red-500 rounded-sm"
                        style={{height: `${Math.random() * 100}%`}}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Growth - Bottom Left */}
              <div className="absolute bottom-16 left-12 w-36 bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-2xl animate-float"
                   style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mb-1">Subscribers</div>
                <div className="text-lg text-white font-bold">128.5K</div>
                <div className="text-xs text-green-400">+12.5%</div>
              </div>

              {/* Platform Integration - Bottom Right */}
              <div className="absolute bottom-8 right-12 w-44 bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-2xl animate-float"
                   style={{animationDelay: '1.5s'}}>
                <div className="text-xs text-gray-400 mb-3">Connected Platforms</div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">YT</span>
                    </div>
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">FB</span>
                    </div>
                    <div className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">IG</span>
                    </div>
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">TK</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white font-semibold">4.2M</div>
                    <div className="text-xs text-gray-400">Total Reach</div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: -1}}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#ef4444', stopOpacity: 0.1}} />
                    <stop offset="50%" style={{stopColor: '#ef4444', stopOpacity: 0.3}} />
                    <stop offset="100%" style={{stopColor: '#ef4444', stopOpacity: 0.1}} />
                  </linearGradient>
                </defs>
                
                {/* Curved lines connecting cards to central laptop */}
                <path d="M120 120 Q200 200 280 320" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-draw" />
                <path d="M360 140 Q320 220 280 320" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-draw" />
                <path d="M140 420 Q210 380 280 360" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-draw" />
                <path d="M380 450 Q330 400 300 360" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-draw" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes draw {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 1000; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-draw {
          animation: draw 2s ease-in-out forwards;
          animation-delay: 1s;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServicesHero;