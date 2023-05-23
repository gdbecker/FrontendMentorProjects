/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': {
        100: "hsl(0, 0%, 100%)",
        200: "hsla(0, 0%, 100%, 0.75)",
        300: "hsla(0, 0%, 100%, 0.6)",
      },
      "offWhite": "#F0F0F0",
      "violet": "hsl(257, 40%, 49%)",
      "magenta": "hsl(300, 69%, 71%)",
    },
    extend: {
      fontFamily: {
        poppinsRegular: "Poppins-Regular",
        poppinsSemiBold: "Poppins-SemiBold",
        opensansRegular: "OpenSans-Regular",
      },
    },
  },
  plugins: [],
}
