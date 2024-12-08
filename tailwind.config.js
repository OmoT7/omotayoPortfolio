/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
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
            'background-position': '0% 50%'
          },
          '50%': { 
            'background-position': '100% 50%'
          }
      }
    },  
      animation: {
        "filter-animation": "filter-animation 4s infinite",
        "filter-scale": "filter-scale 8s infinite",
        'gradient-x': 'gradient-x 15s ease infinite'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-background': 'linear-gradient(-45deg, #1A2B3C, #0F1729, #0A1020, #020314)',
      }
    },
  },
  plugins: [],
}

