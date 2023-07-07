/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "strongCyan": "hsl(172, 67%, 45%)",
      "veryDarkCyan": "hsl(183, 100%, 15%)",
      "grayishCyan": {
        100: "hsl(189, 41%, 97%)",
        200: "hsl(185, 41%, 84%)",
        300: "hsl(184, 14%, 56%)",
      },
      "white": "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        spaceMonoBold: "SpaceMono-Bold",
      },
    },
  },
  plugins: [],
}
