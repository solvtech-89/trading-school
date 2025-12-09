/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Additional Tailwind utilities can be added here
      // Most theme is now defined in CSS using @theme
    },
  },
  plugins: [],
}
