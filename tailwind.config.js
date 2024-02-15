/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212529",
        secondary: "#c77dff",
        background: "#cba8e1",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

