/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1565D8",
        dark:{
          hard: "#0D2436",
          soft: "#183b56",
        },
      },
      fontFamily:{
        opensans:["'Open Sans'", "sans-serif"],
        robot:["'Roboto'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
