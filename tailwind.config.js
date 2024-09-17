/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#00a8ff",
        "secondary-color": "#66c9ff",
      },
      screens: {
        "950": "950px",
        "775": "775px",
      }
    },
  },
  plugins: [],
};
