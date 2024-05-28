/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backdropBrightness: {
        35: '.35'
      },
      fontFamily: {
        'sans': ['Gill Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

