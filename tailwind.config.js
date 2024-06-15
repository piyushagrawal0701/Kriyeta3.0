/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear-gradient-black-blue': 'linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 255))',
      },
    },
  },
  plugins: [],
}
