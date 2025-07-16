/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily: {
      header: ['Oswald', 'sans-serif'],
    },

    colors: {
      'red': "#800000",
      'gray': "#B6B09F",
      'light-cream': "#FAF7F3",
      'white': "#FFFFFF",
      'black': "#000000",
      'dark-gray': "#222831"
    },

    container: {
      center: true,
    },
  },
  plugins: [],
}
