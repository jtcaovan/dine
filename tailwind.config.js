const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'beaver': '#9E7F66',
      'cod-gray': '#111111',
      'mirage': '#17192B',
      'ebony': '#242B37',
      'shuttle-gray': '#5C6779'
    },
    fontFamily: {
      sans: ['Spartan', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}
