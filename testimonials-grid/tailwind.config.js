/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "violet": {
        100: "hsl(263, 55%, 52%)",
        200: "hsla(263, 55%, 52%, 0.5)",
      },
      "lightGray": "hsl(0, 0%, 81%)",
      "grayishBlue": "hsl(217, 19%, 35%)",
      "lightGrayishBlue": "hsl(210, 46%, 95%)",
      "blackishBlue": "hsl(219, 29%, 14%)",
      "white": {
        100: "hsl(0, 0%, 100%)",
        200: "hsla(0, 0%, 100%, 0.5)",
      }
    },
    extend: {
      fontFamily: {
        barlowMedium: "Barlow-Medium",
        barlowSemiBold: "Barlow-SemiBold",
      },
    },
  },
  plugins: [],
}
