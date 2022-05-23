module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb'
      }
    },
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')],

}
