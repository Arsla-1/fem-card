/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // cream: "#f0e3ce",
        cream: "#f2eae2",
        secondary: "rgb(54, 52, 52)",
        accent: "#3d8168",
        darkaccent: "#1a4032",
        muted: "#6c7289",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        heading: "2rem",
      },
    },
  },
  plugins: [],
};
