/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0E79B2',
        'secondary': '#191923',
        'tertiary': '#FBFEF9',

      }
    },
  },
  plugins: [],
}

