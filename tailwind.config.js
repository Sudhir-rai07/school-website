/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "play-write": ["Fira Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

