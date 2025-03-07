/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75', 
        '200': '2.00', 
        '250': '2.50',  
      },fontSize: {
        '1.5xl': '1.30rem', 
      },
      lineHeight: {
        '1.5xl': '1.75rem', 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

