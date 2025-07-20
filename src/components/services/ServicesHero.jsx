import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-dark">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-heading font-black mb-6">
            Complete Music Industry
            <span className="gradient-text block">Solutions</span>
          </h1>
          <p className="text-xl text-text-gray mb-8 leading-relaxed max-w-3xl mx-auto">
            From artist development to global distribution, we provide end-to-end services 
            that transform musical talent into commercial success.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="btn-primary">Explore Services</button>
            <button className="btn-secondary">Get Custom Quote</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-secondary-gold mb-2">Strategic</h3>
              <p className="text-text-gray">Data-driven approaches for maximum impact</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-secondary-gold mb-2">Scalable</h3>
              <p className="text-text-gray">Solutions that grow with your success</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-secondary-gold mb-2">Premium</h3>
              <p className="text-text-gray">Industry-leading quality and execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;