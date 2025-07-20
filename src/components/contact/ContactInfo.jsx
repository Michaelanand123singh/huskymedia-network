import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@huskymedia.network',
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Music Row, Nashville, TN 37203',
      description: 'Visit our creative studio'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      description: 'Emergency support 24/7'
    }
  ];

  return (
    <section className="py-16 px-6 bg-primary-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-gray text-lg">
            Multiple ways to connect with our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div 
                key={index}
                className="bg-primary-black p-6 rounded-lg text-center hover:bg-primary-gray transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold-orange rounded-full mb-4">
                  <Icon size={24} className="text-primary-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{detail.label}</h3>
                <p className="text-secondary-gold font-medium mb-2">{detail.value}</p>
                <p className="text-text-gray text-sm">{detail.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <h4 className="text-3xl font-bold text-secondary-gold mb-1">500+</h4>
            <p className="text-text-gray">Artists Served</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-secondary-gold mb-1">25</h4>
            <p className="text-text-gray">Industry Partners</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-secondary-gold mb-1">8</h4>
            <p className="text-text-gray">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-secondary-gold mb-1">24/7</h4>
            <p className="text-text-gray">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;