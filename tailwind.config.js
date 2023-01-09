/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'tablet':'940px',
      'laptop':'1000px'
    },
    extend: {},
  },
  plugins: [],
}
