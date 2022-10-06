/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        clickPoint: 'clickPoint 3s infinite'
      },
      keyframes: {
        clickPoint: {
          '90%': {
            transform: 'scale(1.5)'
          },
          '0%, 100%' : {
            transform: 'scale(0.5)'
          }  
        }
      }
    },
  },
  plugins: [],
}
