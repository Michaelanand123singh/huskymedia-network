/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: '#2a2a2a',
        primary: {
          black: '#000000',
          charcoal: '#1a1a1a',
          gray: '#2a2a2a',
        },
        secondary: {
          gold: '#FFD700',
          blue: '#00FFFF',
        },
        text: {
          white: '#FFFFFF',
          gray: '#CCCCCC',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple-blue': 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        'gradient-gold-orange': 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionProperty: {
        grayscale: 'filter',
      },
    },
  },
  plugins: [],
}
