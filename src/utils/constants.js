// Navigation Links
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Artists', path: '/artists' },
  { name: 'Movies', path: '/movies' },
  { name: 'Contact', path: '/contact' }
];

// Company Information
export const companyInfo = {
  name: 'Husky Media Network',
  tagline: 'Where Music Meets Digital Mastery',
  phone: '+1 (555) 123-4567',
  email: 'hello@huskymedia.network',
  address: '123 Music Row, Nashville, TN 37203',
  socialMedia: {
    instagram: 'https://instagram.com/huskymedianetwork',
    twitter: 'https://twitter.com/huskymedia',
    youtube: 'https://youtube.com/huskymedianetwork',
    linkedin: 'https://linkedin.com/company/huskymedianetwork'
  }
};

// Animation Durations
export const animationDurations = {
  fast: 300,
  normal: 500,
  slow: 800,
  imageTransition: 4000
};

// Breakpoints
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

// API Endpoints
export const apiEndpoints = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  artistApplication: '/api/artist-application'
};

// Form Validation
export const validationRules = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[1-9][\d]{0,15}$/,
  minNameLength: 2,
  maxMessageLength: 1000
};