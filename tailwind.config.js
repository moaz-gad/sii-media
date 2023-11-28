/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(22, 31%, 52%)",
        normal: "hsl(209, 34%, 30%)",
      },
    },
  },
  plugins: [],
}
