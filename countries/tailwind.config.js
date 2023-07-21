/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "darkBlue": "hsl(209, 23%, 22%)", // Dark Mode Elements
      "veryDarkBlue-Dark": "hsl(207, 26%, 17%)", // Dark Mode Background
      "veryDarkBlue-Light": "hsl(200, 15%, 8%)", // Light Mode Text
      "darkGray": "hsl(0, 0%, 52%)", // Light Mode Input
      "veryLightGray": "hsl(0, 0%, 98%)", // Light Mode Background
      "white": "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
    },
    extend: {
      fontFamily: {
        nunitoSansExtraBold: "NunitoSans-ExtraBold",
        nunitoSansLight: "NunitoSans-Light",
        nunitoSansSemiBold: "NunitoSans-SemiBold",
      },
    },
    variants: {
      extend: {
        backgroundImage: ["dark"],
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}