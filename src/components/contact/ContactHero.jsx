import { MessageCircle, Calendar, Phone } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative h-[70vh] bg-black flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Contact us 
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Ready to take your music career to the next level? Get in touch with our team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Calendar size={18} />
            Book Consultation
          </button>
          <button className="bg-transparent border border-red-500 hover:bg-red-500 text-red-500 hover:text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <MessageCircle size={18} />
            Live Chat
          </button>
          <button className="bg-transparent border border-red-500 hover:bg-red-500 text-red-500 hover:text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Phone size={18} />
            Call Now
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-1">24/7</h3>
            <p className="text-gray-400 text-sm">Support Available</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-1">&lt; 2hrs</h3>
            <p className="text-gray-400 text-sm">Response Time</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-1">95%</h3>
            <p className="text-gray-400 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;