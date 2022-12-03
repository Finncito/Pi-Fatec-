/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        'screaming-green': '#5DE05E',
        'green-mono': {
          100: '#A5E6A5',
          600: '#49AD49',
          800: '#466146',
          900: '#296129',
        },
        'complementary': {
          100: '#85FF85',
          600: '#2f942f',
          700: '#e05e9f',
          900: '#94215a'
        },
        'secondary': {
          100: '#edf0f0',
          300: '#aeb0b0',
          500: '#626363',
          700: '#6f7070',
          900: '#494a4a',
        },
        'gradient': {
          300: '#00c582',
          500: '#00a794',
          700: '#466146',
          900: '#00667c'
        }
      },
      fontFamily: {
        open: ['"Open Sans"']
      }
    },
  },
  plugins: [],
}
