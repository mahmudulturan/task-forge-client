/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        "text-col": "#FFFFFF",
        "bg-col": "#13002E",
        "primary-col": "#FFD401",
        "secondery-col": "#937E10",
        "accent-col": "#D5E938",
      }
    },
  },
  plugins: [],
}

