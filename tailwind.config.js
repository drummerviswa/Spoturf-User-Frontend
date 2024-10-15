/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Mulish: ["Mulish","sans-serif"]
      },
      colors:{
        primary:"#588157",
        secondary:"#3a5a40",
        ternary:"#a3b18a",
        lightTheme:"#dad7cd",
        darkTheme:"#344e41"
      }
    },
  },
  plugins: [],
}

