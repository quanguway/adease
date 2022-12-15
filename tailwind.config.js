/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#FA5F1A',
      primarylight: '#FA5F1A5C',
      white: '#FFFFFF',
      green: colors.green,
      gray: colors.gray,
    },
    fontFamily: {
      sans: ['Poppins']
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '832px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      // 
      
    },
    extend: {
      dropShadow: {
        'banneritem1' : '-40px 50px 0px rgba(255, 171, 78, 0.36)',
        'banneritem2' : '40px 50px 0px rgba(172, 232, 232, 0.36)',
        'banneritem3' : '-40px 50px 0px rgba(250, 95, 26, 0.36)',
      }
    },
  },
  plugins: [],
}
