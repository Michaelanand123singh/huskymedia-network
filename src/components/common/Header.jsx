import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Artists', path: '/artists' },
    { name: 'Movies', path: '/movies' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/husky.png" alt="Husky Media" className="h-12 w-auto"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-red-500 ${
                  location.pathname === link.path
                    ? 'text-red-500 border-b-2 border-red-500 pb-1'
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Contact CTA Button */}
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-sm font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-red-500 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-800">
            <nav className="py-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-red-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm font-medium text-sm transition-all duration-300 mt-4"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;