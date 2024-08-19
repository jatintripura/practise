/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#e4eefe",
          50: "#aecdfb",
          75: "#78abf9",
          100: "#428af6",
          200: "#2779f5",
          300: "#0c68f4",
          400: "#0951be",
          500: "#063a88",
          600: "#052e6d",
          700: "#042352",

          900: "#021736",
        },
        secondary: {
          100: "#fddbc9",
          200: "#fab793",
          300: "#f68242",
          400: "#f45e0c",
          500: "#be4909",
          600: "#883406",
        },
        error: "#c91433",
        errorLight: "#fae7eb",
        success: "#146c43",
        successLight: "#d1f7e5",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
