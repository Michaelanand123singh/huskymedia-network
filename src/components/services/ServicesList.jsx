import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const ServicesList = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (serviceId) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId);
  };

  return (
    <section className="py-20 bg-primary-charcoal">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Comprehensive solutions tailored to every stage of your music career journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedCard === service.id}
              onToggle={() => handleToggle(service.id)}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-purple-blue rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Package?</h3>
            <p className="text-white/80 mb-6">
              Every artist is unique. Let's create a tailored solution for your specific needs.
            </p>
            <button className="bg-secondary-gold text-primary-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;