/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#71697A",
      accent: "#E4BE9E",
      background: "#F8F8E1",
      highlight: "#000000",
      lightText: "#000000",
    },
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
},
 plugins: [
    require('tailwind-scrollbar'), 
     require('@tailwindcss/line-clamp'),
  
  ],
};

