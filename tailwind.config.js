/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        "main-btn": "#E76F51",
      },
    },
  },
  plugins: [require("daisyui")],
};
