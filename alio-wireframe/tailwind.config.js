/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#24AFB5",
        secondary: "#24AFB5",
        paragraph: "#585757",
      },
      screens: {
        mobile: "640px", // Medium screens (default Tailwind)
        desktop: "1024px", // Large screens (default Tailwind)
      },
    },
  },
  plugins: [],
};
