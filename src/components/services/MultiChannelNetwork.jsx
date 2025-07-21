import React from 'react';

const MultichannelNetwork = () => {
  const platforms = [
    { name: 'Spotify', icon: '🎵', reach: '400M+' },
    { name: 'YouTube', icon: '📺', reach: '2B+' },
    { name: 'Apple Music', icon: '🍎', reach: '100M+' },
    { name: 'Instagram', icon: '📷', reach: '2B+' },
    { name: 'TikTok', icon: '🎭', reach: '1B+' },
    { name: 'SoundCloud', icon: '☁️', reach: '300M+' }
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
            Multi-Channel Distribution
          </h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Enterprise content distribution across major platforms
          </p>
        </div>

        {/* Compact S-Timeline */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-red-600 via-white to-red-600 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-3 gap-6">
            {platforms.map((platform, index) => {
              const isTop = index < 3;
              
              return (
                <div key={platform.name} className={`relative ${isTop ? 'mb-16' : 'mt-16'}`}>
                  <div className={`absolute left-1/2 w-px h-16 bg-red-500 transform -translate-x-1/2 ${
                    isTop ? 'top-full' : 'bottom-full'
                  }`}></div>
                  
                  <div className="bg-gray-900/50 border border-red-500/20 rounded-lg p-4 hover:border-red-500/40 transition-all">
                    <div className="text-center">
                      <div className="text-xl mb-2">{platform.icon}</div>
                      <h3 className="font-semibold text-sm text-white mb-1">{platform.name}</h3>
                      <div className="text-red-400 font-bold text-lg">{platform.reach}</div>
                    </div>
                  </div>
                  
                  <div className={`absolute left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 ${
                    isTop ? 'top-full translate-y-14' : 'bottom-full -translate-y-14'
                  } border border-black`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Stats & CTA */}
        <div className="text-center">
          <div className="flex justify-center gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-red-400">95%</div>
              <div className="text-xs text-gray-400">Reach Increase</div>
            </div>
            <div>
              <div className="text-xl font-bold text-red-400">48hrs</div>
              <div className="text-xs text-gray-400">Distribution</div>
            </div>
            <div>
              <div className="text-xl font-bold text-red-400">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default MultichannelNetwork;