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
    fontSize: {
      'xs': '.88rem',
      'sm': '.94rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      sans: ['Spartan', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}
