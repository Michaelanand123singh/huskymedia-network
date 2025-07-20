import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = ({ type = 'general' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-text-white text-sm font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-charcoal border border-primary-gray rounded-lg focus:border-secondary-gold focus:outline-none text-text-white"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label className="block text-text-white text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-charcoal border border-primary-gray rounded-lg focus:border-secondary-gold focus:outline-none text-text-white"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {type === 'artist' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-text-white text-sm font-medium mb-2">
              Service Needed
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-primary-charcoal border border-primary-gray rounded-lg focus:border-secondary-gold focus:outline-none text-text-white"
            >
              <option value="">Select a service</option>
              <option value="artist-development">Artist Development</option>
              <option value="digital-distribution">Digital Distribution</option>
              <option value="content-production">Content Production</option>
              <option value="technology">Technology Solutions</option>
            </select>
          </div>
          
          <div>
            <label className="block text-text-white text-sm font-medium mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-primary-charcoal border border-primary-gray rounded-lg focus:border-secondary-gold focus:outline-none text-text-white"
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-50k">$15,000 - $50,000</option>
              <option value="over-50k">Over $50,000</option>
            </select>
          </div>
        </div>
      )}

      <div>
        <label className="block text-text-white text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-primary-charcoal border border-primary-gray rounded-lg focus:border-secondary-gold focus:outline-none text-text-white resize-none"
          placeholder="Tell us about your project or how we can help..."
        />
      </div>

      <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
        <Send className="w-4 h-4" />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;