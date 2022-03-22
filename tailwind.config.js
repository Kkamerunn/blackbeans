const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: '28rem',
        124: '40rem',
        150: '50rem',
        155: '55rem',
      },
      colors: {
        primary: '#FFEED6',
      },
    },
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
      210: '2.1',
      250: '2.5',
      300: '3',
      350: '3.5',
      400: '4',
    },
  },
  variants: {
    extend: {
      scale: ['group-hover', 'hover'],
      width: ['group-hover'],
      height: ['group-hover'],
      animation: ['hover'],
    },
  },
  plugins: [],
}
