/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html", "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        p: ['FontForP', 'sans-serif'],
        h: ['FontForH', 'serif'],
        logo: ['FontForLogo', 'monospace']
      }
    },
  },
  plugins: [nextui()]
}