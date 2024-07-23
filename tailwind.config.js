/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '700px',
        md: '900px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
