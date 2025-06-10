/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'hide-nav': {'max': '1400px'},
        'change-cart': {'max': '1144px'},
      },
      backgroundImage: {
        'bg-main': "url('/src/assets/bg-main.png')",
        
      },
      colors: {
        'gray-custom': '#9B9A99',
        'gray-dot-active': '#4B4B4B',
        'gray-dot': '#D9D9D9',

      },
      borderColor: {
        'border-cart': '#B6B1B1',
        'border-arrow': '#D1CFCF',
      }
    },
    fontFamily: {
      SpaceGrotesk: ["Space Grotesk", "sans-serif"],
    },
  },
  plugins: [],
}

