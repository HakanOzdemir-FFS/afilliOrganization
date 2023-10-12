/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark-color-1": "#1d3557",
        "primary-dark-color-2": "#457b9d",
        "primary-light-color-1": "#a8dadc",
        "primary-light-color-2": "#f1faee",
        "secondary-dark-color-1": "#e63946",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans"],
      },
    },
  },
  plugins: [],
};
