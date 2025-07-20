import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black border-t border-primary-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Husky Media" className="h-8 w-8" />
              <span className="text-lg font-heading font-bold gradient-text">
                Husky Media Network
              </span>
            </div>
            <p className="text-text-gray mb-4 max-w-md">
              Where Music Meets Digital Mastery. Empowering artists with cutting-edge digital solutions and industry expertise.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-text-gray hover:text-secondary-blue cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-text-gray hover:text-secondary-blue cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-text-gray hover:text-secondary-blue cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-text-gray hover:text-secondary-blue cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-text-gray hover:text-text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-text-gray hover:text-text-white transition-colors">Services</Link></li>
              <li><Link to="/artists" className="text-text-gray hover:text-text-white transition-colors">Artists</Link></li>
              <li><Link to="/contact" className="text-text-gray hover:text-text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-text-gray">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-text-gray">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@huskymedia.network</span>
              </div>
              <div className="flex items-center space-x-2 text-text-gray">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Nashville, TN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-gray mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-text-gray text-sm">
            © {currentYear} Husky Media Network. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="#" className="text-text-gray hover:text-text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-text-gray hover:text-text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;