/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'blancoLetra': '#FFFFFF',
      },
      padding: {
        'footerPadding': '4em 0em',
        'headerPadding': '1em 4em',
        'paddingLinks': '0em 1em'
      },
    },
  },
  plugins: [],
};
