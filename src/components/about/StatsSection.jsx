

const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Artists Served', icon: '🎤' },
    { number: '50M+', label: 'Streams Generated', icon: '📈' },
    { number: '25+', label: 'Industry Partners', icon: '🤝' },
    { number: '8+', label: 'Years Experience', icon: '⭐' }
  ];

  return (
    <section className="py-20 bg-gradient-purple-blue">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
            Our Impact in <span className="text-secondary-gold">Numbers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl mb-4 group-hover:animate-float">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-heading font-black text-secondary-gold mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-xl text-white mb-4">
              "We don't just work with artists, we build careers that last."
            </p>
            <p className="text-secondary-gold font-semibold">- Alex Rodriguez, Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;