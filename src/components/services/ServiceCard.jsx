import React from 'react';

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  return (
    <div className="service-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl group-hover:animate-float">{service.icon}</div>
        <div className="text-right">
          <div className="text-sm text-secondary-gold font-semibold">{service.duration}</div>
          <div className="text-xs text-text-gray">{service.pricing}</div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-text-white mb-3 group-hover:text-secondary-gold transition-colors">
        {service.title}
      </h3>
      
      <p className="text-text-gray mb-6 line-clamp-3">
        {service.description}
      </p>

      <div className="space-y-2 mb-6">
        {service.features.slice(0, isExpanded ? service.features.length : 2).map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-text-gray">
            <span className="text-secondary-gold mr-2">✓</span>
            {feature}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button 
          onClick={onToggle}
          className="flex-1 bg-primary-gray hover:bg-secondary-blue/20 text-secondary-blue border border-secondary-blue px-4 py-2 rounded-lg transition-all text-sm"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
        <button className="flex-1 btn-primary text-sm py-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;