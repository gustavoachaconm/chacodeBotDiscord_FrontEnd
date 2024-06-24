/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'blanco': '#FFFFFF',
        'verde': '#22BC33',
        'negro': '#161616',
        'gris': '#818181',
        'verdeOscuro': '#01A300',
      },
      padding: {
        'footerPadding': '4em 0em',
        'headerPadding': '1em 4em',
        'paddingLinks': '0em 1em',
        'paddingCardServer': '2em',
        'paddingDashboard': '4em 0em',
        'paddingAddDiscordButton': '0.2em',
        'paddingButtonLogin': '0.2em 1em',
      },
      gap: {
        'gapCardServerText': '0.5em',
        'gapMainDashboard': '4em',
      },
    },
  },
  plugins: [],
};
