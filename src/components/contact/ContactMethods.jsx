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
    <section className="py-12 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Contact Method Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">
              Choose Your <span className="text-red-500">Method</span>
            </h3>
            <div className="space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => {
                      setSelectedMethod(method.id);
                      setFormData({ ...formData, inquiryType: method.id });
                    }}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedMethod === method.id
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={18} />
                      <span className="font-medium text-sm">{method.title}</span>
                    </div>
                    <p className={`text-xs ${
                      selectedMethod === method.id ? 'text-gray-200' : 'text-gray-400'
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-red-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-red-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-red-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-red-500 focus:outline-none resize-none transition-colors"
                  required
                />
              </div>

              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 w-full transition-colors font-medium"
              >
                <Send size={18} />
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