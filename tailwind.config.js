module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0071C5",
          50: "#7EC8FF",
          100: "#69BFFF",
          200: "#40AEFF",
          300: "#189CFF",
          400: "#0088EE",
          500: "#0071C5",
          600: "#00518D",
          700: "#003155",
          800: "#00101D",
          900: "#000000",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-abstract.png')",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        normal: "0",
        wider: ".05em",
        widest: ".5em",
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
