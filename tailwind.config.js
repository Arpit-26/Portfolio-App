/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    screens: {
      'sm': '300px',
      // => @media (min-width: 576px) { ... }

      'md': '833px',
      // => @media (min-width: 960px) { ... }

      'lg': '1240px',
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
    
      backgroundColor: {
        'dark-mode': '#222',
        'light-mode': '#fff',
      },
      textColor: {
        'dark-mode': '#fff',
        'light-mode': '#222',
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"]
      }
     
  },
},
  variants: {},
  plugins: [],
};
