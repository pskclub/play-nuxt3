module.exports = {
  important: true,
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './features/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#04588D',
          '50': '#7BCAFB',
          '100': '#62C0FB',
          '200': '#31ACF9',
          '300': '#0796F0',
          '400': '#0577BF',
          '500': '#04588D',
          '600': '#03395B',
          '700': '#011A2A',
          '800': '#000000',
          '900': '#000000'
        },
        secondary: {
          DEFAULT: '#DFEBF4',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#DFEBF4',
          '600': '#B9D3E7',
          '700': '#93BCDA',
          '800': '#6DA4CD',
          '900': '#478CC0',
          'text': '#516D83'
        },
        info: {
          DEFAULT: '#17A2B8',
          50: '#BEEFF7',
          100: '#A7E9F4',
          200: '#7ADEEE',
          300: '#4CD3E9',
          400: '#1FC8E3',
          500: '#17A2B8',
          600: '#117A8B',
          700: '#0C525D',
          800: '#062A30',
          900: '#000203'
        },
        danger: {
          DEFAULT: '#DB2625',
          50: '#FCEAEA',
          100: '#F8D4D4',
          200: '#F1A9A8',
          300: '#E97D7D',
          400: '#E25251',
          500: '#DB2625',
          600: '#B01E1D',
          700: '#841616',
          800: '#580F0F',
          900: '#2D0807'
        },
        success: {
          DEFAULT: '#28A745',
          50: '#C4F1CE',
          100: '#AFECBD',
          200: '#86E29B',
          300: '#5DD879',
          400: '#34CE57',
          500: '#28A745',
          600: '#1E7E34',
          700: '#145523',
          800: '#0A2C12',
          900: '#010201'
        },
        warning: {
          DEFAULT: '#FFC107',
          50: '#FFFAED',
          100: '#FFF4D3',
          200: '#FFE7A0',
          300: '#FFDB6D',
          400: '#FFCE3A',
          500: '#FFC107',
          600: '#D39E00',
          700: '#A07800',
          800: '#6D5200',
          900: '#3A2B00'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
}
