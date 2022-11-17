const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      linearBorderGradients: ({ theme }) => ({
        colors: {
          "pink-purple": ["#ff7b7b", "#582697"],
        },
        background: theme("colors"),
      }),
      screens: {
        lg: "1320px",
        mobile: { max: "768px" },
      },
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "100vw",
        md: "1320px",
      },
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#f7f6f2",
      grey: {
        100: "#c4c4c4",
        900: "#4b4b4b",
      },
      black: "#262626",
      pink: "#ff7b7b",
      purple: "#582697",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-border-gradient-radius"),
  ],
};
