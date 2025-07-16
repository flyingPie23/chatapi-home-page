/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      header: ['Oswald', 'sans-serif'],
    },
    colors: {
      'red': "#800000",
      'light-gray': "#DDDDDD",
      'light-cream': "#FAF7F3",
      'white': "#FFFFFF",
      'black': "#000000",
    }
  },
  plugins: [],
}
