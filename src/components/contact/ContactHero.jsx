import { MessageCircle, Calendar, Phone } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative h-[70vh] bg-gradient-dark flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">
          Let's Create <span className="gradient-text">Together</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-gray mb-8">
          Ready to take your music career to the next level? Get in touch with our team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary flex items-center gap-2">
            <Calendar size={20} />
            Book Consultation
          </button>
          <button className="btn-secondary flex items-center gap-2">
            <MessageCircle size={20} />
            Live Chat
          </button>
          <button className="btn-secondary flex items-center gap-2">
            <Phone size={20} />
            Call Now
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold text-secondary-gold mb-2">24/7</h3>
            <p className="text-text-gray">Support Available</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-secondary-gold mb-2">&lt; 2hrs</h3>
            <p className="text-text-gray">Response Time</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-secondary-gold mb-2">95%</h3>
            <p className="text-text-gray">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;