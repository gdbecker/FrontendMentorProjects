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
      "veryDarkGray": "hsl(0, 0%, 17%)",
      "darkGray": "hsl(0, 0%, 59%)",
      "offWhite": "hsl(0, 0%, 98%)",
      "test": "hsl(236, 33%, 92%)",
    },
    extend: {
      fontFamily: {
        rubikBold: "Rubik-Bold",
        rubikMedium: "Rubik-Medium",
        rubikRegular: "Rubik-Regular",
      },
    },
    variants: {
      extend: {
        backgroundImage: ["dark"],
      },
    },
  },
  plugins: [
    
  ],
}
