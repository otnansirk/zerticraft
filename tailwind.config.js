/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7fb',
          100: '#d1f0f7',
          200: '#a3e1ee',
          300: '#75d2e4',
          400: '#3bbad9',
          500: '#0cc0df',
          600: '#08a7c7',
          700: '#0789a6',
          800: '#066d85',
          900: '#05576b',
        }
      }
    },
  },
  plugins: [],
}