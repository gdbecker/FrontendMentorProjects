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
      "green": "hsl(163, 72%, 41%)",
      "red": "hsl(356, 69%, 56%)",
      "facebook": "hsl(208, 92%, 53%)",
      "twitter": "hsl(203, 89%, 53%)",
      "instagram": {
        100: "hsl(37, 97%, 70%)", /* gradient from */
        200: "hsl(329, 70%, 58%)", /* gradient to */
      },
      "youtube": "hsl(348, 97%, 39%)",
      "darkToggle": {
        100: "hsl(210, 78%, 56%)", /* gradient from */
        200: "hsl(146, 68%, 55%)", /* gradient to */
      },
      "lightToggle": "hsl(230, 22%, 74%)",
      "darkTheme": {
        100: "hsl(230, 17%, 14%)", /* background */
        200: "hsl(232, 19%, 15%)", /* top background pattern */
        300: "hsl(228, 28%, 20%)", /* card background */
        400: "hsl(228, 34%, 66%)", /* text */
        500: "hsl(0, 0%, 100%)", /* text */
      },
      "lightTheme": {
        100: "hsl(0, 0%, 100%)", /* background */
        200: "hsl(225, 100%, 98%)", /* top background pattern */
        300: "hsl(227, 47%, 96%)", /* card background */
        400: "hsl(228, 12%, 44%)", /* text */
        500: "hsl(230, 17%, 14%)", /* text */
      },
    },
    extend: {
      fontFamily: {
        interRegular: "Inter-Regular",
        interBold: "Inter-Bold",
      },
    },
  },
  plugins: [
    
  ],
}
