/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'tablet':'720px',
        'laptop':'1000px',
        'pc':'1200px',
        'breakpoints_skills':'820px',
      },
    },
  },
  plugins: [],
}
