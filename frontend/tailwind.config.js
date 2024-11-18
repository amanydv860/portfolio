/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If you have an index.html
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS/React files
  ],
  theme: {
    extend: {
      fontFamily: {
        interTight: ['"Inter Tight"', 'sans-serif'],
      },
      colors: {
        darkred : "#800200", // Dark Red
        shinepur: "#5F0F40", // Purple
        Fwhite:"#FFFFFF",
        Fgrey:"#F2F3F4"
      },
    },
  },
  plugins: [],
}
