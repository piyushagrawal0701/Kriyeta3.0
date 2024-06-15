/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(170deg, rgba(37,99,224,1) 2%, rgba(11,11,142,0.9921218487394958) 26%, rgba(13,13,125,1) 31%, rgba(16,16,105,1) 38%, rgba(28,28,28,1) 71%)',
      },
    },
  },
  plugins: [],
}
