/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme colors for the website
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF', //main heading colours
      }
    },
  },
  plugins: [],
}
