/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "cyan": "hsl(193, 38%, 86%)",
      "green": "hsl(150, 100%, 66%)",
      "grayishBlue": "hsl(217, 19%, 38%)",
      "darkGrayishBlue": "hsl(217, 19%, 24%)",
      "darkBlue": "hsl(218, 23%, 16%)",
    },
    extend: {
      fontFamily: {
        manropeExtraBold: "Manrope-ExtraBold",
      },
    },
  },
  plugins: [],
}
