import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7903624752',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Official@huskymedianetwork.com',
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Hyderabad, India',
      description: 'Visit our Office'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      description: 'Emergency support 24/7'
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-base">
            Multiple ways to connect with our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div 
                key={index}
                className="bg-black p-4 rounded-lg text-center hover:bg-gray-800 transition-colors border border-gray-800"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mb-3">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-medium mb-1 text-white">{detail.label}</h3>
                <p className="text-red-500 font-medium mb-1 text-sm">{detail.value}</p>
                <p className="text-gray-400 text-xs">{detail.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-center">
          <div>
            <h4 className="text-2xl font-bold text-red-500 mb-1">200+</h4>
            <p className="text-gray-400 text-sm">Channels</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-red-500 mb-1">50+</h4>
            <p className="text-gray-400 text-sm">Industry Partners</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-red-500 mb-1">8</h4>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-red-500 mb-1">24/7</h4>
            <p className="text-gray-400 text-sm">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;