/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#101822",
      },
      fontFamily: {
        "sans": ["Roboto"]
      }
    },
  },
  plugins: [],
}
