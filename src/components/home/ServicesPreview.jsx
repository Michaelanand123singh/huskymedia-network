import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

const ServicesPreview = () => {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-20 bg-primary-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Complete digital solutions tailored for the music industry. From artist development to technology integration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={service.id} className="service-card group cursor-pointer">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-heading font-bold mb-3 text-text-white group-hover:text-secondary-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-text-gray mb-4 line-clamp-3">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-blue font-semibold">
                  {service.pricing}
                </span>
                <ArrowRight className="w-5 h-5 text-secondary-gold transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;