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
      "brightBlue": "hsl(220, 98%, 61%)",
      "checkBgFrom": "hsl(192, 100%, 67%)",
      "checkBgTo": "hsl(280, 87%, 65%)",
      "darkTheme": {
        100: "hsl(235, 21%, 11%)", /*  */
        200: "hsl(235, 24%, 19%)", /*  */
        300: "hsl(234, 39%, 85%)", /*  */
        400: "hsl(236, 33%, 92%)", /* hover */
        500: "hsl(234, 11%, 52%)", /*  */
        600: "hsl(233, 14%, 35%)", /*  */
        700: "hsl(237, 14%, 26%)", /*  */
      },
      "lightTheme": {
        100: "hsl(0, 0%, 98%)", /*  */
        200: "hsl(236, 33%, 92%)", /*  */
        300: "hsl(233, 11%, 84%)", /*  */
        400: "hsl(236, 9%, 61%)", /*  */
        500: "hsl(235, 19%, 35%)", /*  */
      },
    },
    extend: {
      fontFamily: {
        josefinSansRegular: "JosefinSans-Regular",
        josefinSansBold: "JosefinSans-Bold",
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
