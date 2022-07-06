module.exports = {
  // mode: 'jit',
  content: ["./index.html", "./grid.html","./index2.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      vazir: ["Vazir"],
    },
    extend: {
      lineHeight: {
        0: "0",
      },
      padding: {
        "1/3": "33.333333%",
        "2/3": "66.6666%",
      },
    },
  },
  Plugin: [require("@tailwindcss/aspect-ratio")],
};
