/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "veryDarkBlue": "hsl(233, 47%, 7%)", /* main background */
      "darkDesaturatedBlue": "hsl(244, 38%, 16%)", /* card background */
      "violet": "hsl(277, 64%, 61%)", /* accent */
      'white': {
        100: "hsl(0, 0%, 100%)", /* main heading, stats */
        200: "hsla(0, 0%, 100%, 0.75)", /* main paragraph */
        300: "hsla(0, 0%, 100%, 0.6)", /* stat headings */
      },
    },
    extend: {
      fontFamily: {
        interRegular: "Inter-Regular",
        interBold: "Inter-Bold",
        lexenddecaRegular: "LexendDeca-Regular",
      },
    },
  },
  plugins: [],
}
