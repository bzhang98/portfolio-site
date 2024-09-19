/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Default global font
        fira: ["Fira Code", "monospace"], // Fira Code for code blocks
      },
    },
  },
  plugins: [],
};
