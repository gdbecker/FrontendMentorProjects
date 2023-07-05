/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "theme1MainBg": "hsl(222, 26%, 31%)",
      "theme1KeypadBg": "hsl(223, 31%, 20%)",
      "theme1ScreenBg": "hsl(224, 36%, 15%)",

      "theme1KeyEditBg": "hsl(225, 21%, 49%)",
      "theme1KeyEditBgHover": "hsl(225, 21%, 70%)",
      "theme1KeyEditShadow": "hsl(224, 28%, 35%)",
      "theme1KeyEqualsBg": "hsl(6, 63%, 50%)",
      "theme1KeyEqualsBgHover": "hsl(6, 63%, 75%)",
      "theme1KeyEqualsShadow": "hsl(6, 70%, 34%)",
      "theme1KeyMainBg": "hsl(30, 25%, 89%)",
      "theme1KeyMainBgHover": "hsl(30, 25%, 99%)",
      "theme1KeyMainShadow": "hsl(28, 16%, 65%)",

      "theme1TextDark": "hsl(221, 14%, 31%)",
      "theme1TextWhite": "hsl(0, 0%, 100%)",

      "theme2MainBg": "hsl(0, 0%, 90%)",
      "theme2KeypadBg": "hsl(0, 5%, 81%)",
      "theme2ScreenBg": "hsl(0, 0%, 93%)",

      "theme2KeyEditBg": "hsl(185, 42%, 37%)",
      "theme2KeyEditShadow": "hsl(185, 58%, 25%)",
      "theme2KeyEqualsBg": "hsl(25, 98%, 40%)",
      "theme2KeyEqualsShadow": "hsl(25, 99%, 27%)",
      "theme2KeyMainBg": "hsl(45, 7%, 89%)",
      "theme2KeyMainShadow": "hsl(35, 11%, 61%)",

      "theme2TextDark": "hsl(60, 10%, 19%)",
      "theme2TextWhite": "hsl(0, 0%, 100%)",

      "theme3MainBg": "hsl(268, 75%, 9%)",
      "theme3KeypadBg": "hsl(268, 71%, 12%)",
      "theme3ScreenBg": "hsl(268, 71%, 12%)",

      "theme3KeyEditBg": "hsl(281, 89%, 26%)",
      "theme3KeyEditShadow": "hsl(285, 91%, 52%)",
      "theme3KeyEqualsBg": "hsl(176, 100%, 44%)",
      "theme3KeyEqualsShadow": "hsl(177, 92%, 70%)",
      "theme3KeyMainBg": "hsl(268, 47%, 21%)",
      "theme3KeyMainShadow": "hsl(290, 70%, 36%)",

      "theme3TextDark": "hsl(198, 20%, 13%)",
      "theme3TextLight": "hsl(52, 100%, 62%)",
      "theme3TextWhite": "hsl(0, 0%, 100%)",
      
    },
    extend: {
      fontFamily: {
        leagueSpartanBold: "LeagueSpartan-Bold",
      },
    },
  },
  plugins: [],
}
