content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // <- make sure this is here
  theme: {
    extend: {
      fontFamily: {
        garamond: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
