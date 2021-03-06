module.exports = {
  theme: {
    fontFamily: {
      sans: [
        "Poppins",
        "Helvetica",
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
      ],
      serif: ["Georgia", "Cambria"],
      mono: ["SFMono-Regular", "Menlo"],
    },
    borderRadius: {
      default: "0.25rem",
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "1rem",
      full: "9999px",
      "2xl": "1.5rem",
    },
    extend: {
      colors: {
        violet: {
          100: "#E1C9F8",
          200: "#CCA4F4",
          300: "#AF6FEC",
          400: "#9C4AE8",
          500: "#8826E3",
          600: "#731AC7",
          700: "#5E15A2",
          800: "#47107F",
          900: "#2A0A48",
        },
        teal: {
          100: "#C8F9F7",
          200: "#7FF0EC",
          300: "#48EAE4",
          400: "#18C9C3",
          500: "#129793",
          600: "#0F807C",
          700: "#0B5B59",
          800: "#094947",
          900: "#042524",
        },
        peach: {
          100: "#FFF4EB",
          200: "#FFEAD6",
          300: "#FFDFC2",
          400: "#FFD5AD",
          500: "#FFCB9A",
          600: "#FFC085",
          700: "#FFB570",
          800: "#FFAB5C",
          900: "#FFA047",
        },
        purple: {
          100: "#E8B4F8",
          200: "#DD8EF5",
          300: "#D269F2",
          400: "#C743EF",
          500: "#BE29EC",
          600: "#B114E1",
          700: "#A212CE",
          800: "#850FA9",
          900: "#590A71",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
