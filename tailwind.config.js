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
      },
      animation: {
        "filter-animation": "filter-animation 4s infinite",
        "filter-scale": "filter-scale 8s infinite",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

