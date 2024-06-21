/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "greenFont": "#01A300",
      },
      padding: {
        '4em-0em': '4em 0em',
      },
    },
  },
  plugins: [],
};
