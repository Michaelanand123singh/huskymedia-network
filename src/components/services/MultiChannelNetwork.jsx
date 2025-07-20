import React from 'react';

const MultichannelNetwork = () => {
  const platforms = [
    { name: 'Spotify', icon: '🎵', reach: '400M+ users' },
    { name: 'YouTube Music', icon: '📺', reach: '2B+ users' },
    { name: 'Apple Music', icon: '🍎', reach: '100M+ users' },
    { name: 'Instagram', icon: '📷', reach: '2B+ users' },
    { name: 'TikTok', icon: '🎭', reach: '1B+ users' },
    { name: 'SoundCloud', icon: '☁️', reach: '300M+ users' }
  ];

  const benefits = [
    'Cross-platform content optimization',
    'Unified analytics dashboard',
    'Automated distribution workflow',
    'Real-time performance tracking'
  ];

  return (
    <section className="py-20 bg-primary-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Multi-Channel <span className="gradient-text">Distribution Network</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Reach your audience everywhere they listen. Our network spans all major 
            platforms and emerging channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div key={index} className="group p-6 rounded-xl border border-primary-gray hover:border-secondary-blue transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl group-hover:animate-float">{platform.icon}</span>
                <span className="text-sm text-secondary-blue">{platform.reach}</span>
              </div>
              <h3 className="text-xl font-bold text-text-white group-hover:text-secondary-blue transition-colors">
                {platform.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-primary-charcoal rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-text-white mb-6">
                Why Our Network <span className="text-secondary-gold">Delivers Results</span>
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-secondary-gold mr-3">✓</span>
                    <span className="text-text-gray">{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary mt-8">Join Our Network</button>
            </div>
            <div className="relative">
              <div className="bg-gradient-purple-blue rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-white/80 mb-4">Average Reach Increase</div>
                <div className="text-2xl font-bold text-secondary-gold mb-2">48hrs</div>
                <div className="text-white/80">Distribution Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultichannelNetwork;