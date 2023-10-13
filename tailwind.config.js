/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        white: "#FFFFFF",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
    },
  },
  plugins: [],
};
