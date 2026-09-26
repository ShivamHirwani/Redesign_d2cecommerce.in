/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b1938",
        "primary-deep": "#0e0c1f",
        ink: "#292827",
        "ink-mute": "#73706d",
        "ink-faint": "#9a9794",
        canvas: "#ffffff",
        "canvas-soft": "#faf9f7",
        violet: "#c9b4fa",
        "violet-glow": "#8f7bd6",
        "teal-deep": "#0e3030",
        "teal-mid": "#155555",
        hairline: "#e8e4dd",
        "hairline-dark": "#3f3a52",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};
