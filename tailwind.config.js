/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '375px',
        lsm: '414px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        'Mulish': ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
