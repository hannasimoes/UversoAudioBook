module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fieldworkRegular: ['"FieldWork-Hum-Regular"'],
      fieldworkBold: ['"FieldWork-Hum-Bold"'],
      fieldworkLight: ['"FieldWork-Hum-Light"'],
      fieldworkDemiBold: ['"FieldWork-Hum-DemiBold"'],
      fieldworkHair: ['"FieldWork-Hum-Hair"'],
    },
    extend: {
      borderRadius: {
        button: '28px',
      },
    },
  },
  plugins: [],
}
