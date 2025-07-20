import { useState } from 'react';
import { Send, User, Mail, MessageSquare, Briefcase } from 'lucide-react';

const ContactMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const contactMethods = [
    {
      id: 'general',
      title: 'General Inquiries',
      icon: MessageSquare,
      description: 'Questions about our services'
    },
    {
      id: 'artist',
      title: 'Artist Applications',
      icon: User,
      description: 'Join our network of artists'
    },
    {
      id: 'partnership',
      title: 'Partnership',
      icon: Briefcase,
      description: 'Business collaboration opportunities'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Method Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-6">
              Choose Your <span className="gradient-text">Method</span>
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => {
                      setSelectedMethod(method.id);
                      setFormData({ ...formData, inquiryType: method.id });
                    }}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      selectedMethod === method.id
                        ? 'bg-secondary-gold text-primary-black'
                        : 'bg-primary-charcoal hover:bg-primary-gray'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={20} />
                      <span className="font-semibold">{method.title}</span>
                    </div>
                    <p className={`text-sm ${
                      selectedMethod === method.id ? 'text-primary-black' : 'text-text-gray'
                    }`}>
                      {method.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-primary-charcoal border border-primary-gray rounded-lg px-4 py-3 focus:border-secondary-gold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-primary-charcoal border border-primary-gray rounded-lg px-4 py-3 focus:border-secondary-gold focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-primary-charcoal border border-primary-gray rounded-lg px-4 py-3 focus:border-secondary-gold focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full bg-primary-charcoal border border-primary-gray rounded-lg px-4 py-3 focus:border-secondary-gold focus:outline-none resize-none"
                  required
                />
              </div>

              <button 
                type="submit"
                className="btn-primary flex items-center gap-2 w-full justify-center"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;