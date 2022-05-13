module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      fieldworkRegular: ['"FieldWork-Hum-Regular"'],
      fieldworkBold: ['"FieldWork-Hum-Bold"'],
      fieldworkLight: ['"FieldWork-Hum-Light"'],
      fieldworkDemiBold: ['"FieldWork-Hum-DemiBold"'],
      fontProject: ['Koulen', 'cursive'],
      fieldworkHair: ['"FieldWork-Hum-Hair"'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      borderRadius: {
        card: '20px',
        button: '28px',
      },
      colors: {
        gray: {
          200: '#fcfcfc',
          250: '#d5d5d5',
          300: '#bcbcbc',
          400: '#6f6f6f',
          500: '#636363',
          600: '#4d4d4d',
          700: '#343434',
          800: '#7c7c7c',
        },

        blue: {},

        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',

        current: 'currentColor',
      },
      boxShadow: {
        default: '0px 5px 7px #70707014',
      },
      fontSize: {
        subtitle: '1.063rem',
        title: '1.313rem',
        xxs: '0.5rem',
      },
      letterSpacing: {
        button: '.2125em',
      },
      height: {
        container: '45rem',
        fit: 'fit-content',
      },
      width: {
        card: '22rem',
        container: '40rem',
        fit: 'fit-content',
        alert: '58rem',
        textarea: '98%',
        carousel: '30rem',
      },
      borderWidth: {
        button: '1px',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
