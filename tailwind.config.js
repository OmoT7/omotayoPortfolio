/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 15s ease infinite',
        wave: 'wave 10s linear infinite',
        "filter-animation": "filter-animation 4s infinite",
        "filter-scale": "filter-scale 8s infinite",
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
        'twinkle': 'twinkle 5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 10s ease-in-out infinite',
        'timeline-particle-1': 'timelineParticle 10s linear infinite',
        'timeline-particle-2': 'timelineParticle 8s linear 3s infinite',
        'timeline-particle-3': 'timelineParticle 12s linear 6s infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        wave: {
          '2%': { transform: 'translateX(1)' },
          '25%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(-50%)' },
          '75%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(1)' },
        },
        "filter-animation": {
          "0%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(45deg)" },
          "100%": { filter: "hue-rotate(0deg)" },
        },
        "filter-scale": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)" },
          "100%": { transform: "scale(0.8)" },
        },
        'gradient-x': {
          '0%, 100%': { 
            'background-position': '0% 50%',
          },
          '50%': { 
            'background-position': '100% 50%',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'wave': {
          '0%': { transform: 'translateX(-50%) translateY(0) scaleY(1)' },
          '50%': { transform: 'translateX(-50%) translateY(-20%) scaleY(0.8)' },
          '100%': { transform: 'translateX(-50%) translateY(0) scaleY(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        'timelineParticle': {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' }
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      backgroundImage: {
        'gradient-background': 'linear-gradient(-45deg, #1A2B3C, #0F1729, #0A1020, #020314)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none', // For Firefox
          '-ms-overflow-style': 'none', // For Internet Explorer
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', // For Chrome, Safari, and Edge
        },
      });
    }
  ],
};