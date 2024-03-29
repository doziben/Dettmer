/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
    "./src/components/**/*.{jsx,js}",
    "./src/components/estate/forms**/*.{jsx,js}",
    "./src/components/UI**/*.{jsx,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    colors: {
      primary: "#006AFF",
      b100: "#ADADAD",
      b200: "#52525A",
      b300: "#2A2A33",
      bggrey: "#FAFAFA",
      white: "#FFFFFF",
      green: "#52BD5A",
      yellow: "#F7931A",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-img": "url('./src/assets/images/HeroImg.png')",
      },
      fontSize: {
        cx: [
          "1rem",
          {
            letterSpacing: "0.3em",
          },
        ],
      },
    },
  },
  plugins: [],
};
