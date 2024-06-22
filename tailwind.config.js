/** @type {import('tailwindcss').Config} */
import  withMT from '@material-tailwind/react/utils/withMT'
export default  withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: '400px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {},
  },
  plugins: [],
});
