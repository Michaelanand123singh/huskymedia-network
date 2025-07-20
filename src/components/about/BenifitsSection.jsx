

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Industry Expertise',
      description: 'Deep understanding of music industry dynamics and digital trends'
    },
    {
      icon: '🚀',
      title: 'Proven Results',
      description: 'Track record of helping artists achieve significant growth and success'
    },
    {
      icon: '🤝',
      title: 'Personal Approach',
      description: 'Dedicated account managers and personalized strategy development'
    },
    {
      icon: '💡',
      title: 'Innovation Focus',
      description: 'Cutting-edge tools and techniques to stay ahead of the competition'
    },
    {
      icon: '📊',
      title: 'Data-Driven',
      description: 'Analytics-based decisions for maximum ROI and performance optimization'
    },
    {
      icon: '🌟',
      title: 'Full-Service',
      description: 'End-to-end solutions from development to distribution and promotion'
    }
  ];

  return (
    <section className="py-20 bg-primary-charcoal">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Why Choose <span className="gradient-text">Husky Media</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            We combine industry expertise with cutting-edge technology to deliver 
            unparalleled results for our artists and partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-6 rounded-xl border border-primary-gray hover:border-secondary-gold transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4 group-hover:animate-float">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-text-white mb-3">{benefit.title}</h3>
              <p className="text-text-gray">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Start Your Journey</button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;