/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'josef': ["Josefin Sans", "sans-serif"],
        'lato': ["Lato", "sans-serif"]
      },
      colors: {
        pinki: '#FB2E86',
        ashe: '#8A8FB9',
        blu: '#151875',
        dblu: '#0D134E',
        ashui: '#A9ACC6',
        deblu: '#101750'
      }
    },
  },
  plugins: [],
}