/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      fontFamily: {
          Inter: '"Inter", serif'
      },
      colors : {
        primary: '#FF4B00',
        secondary : "#1C1D1D"
      },
      boxShadow:{
        cardShadow: "0px 4px 6px 0px #00000017"
      }
    },
  },
  plugins: [],
}

