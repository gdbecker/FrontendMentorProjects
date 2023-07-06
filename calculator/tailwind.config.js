/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "th-MainBg": "var(--MainBg)",
      "th-KeypadBg": "var(--KeypadBg)",
      "th-ScreenBg": "var(--ScreenBg)",

      "th-KeyEditBg": "var(--KeyEditBg)",
      "th-KeyEditBgHover": "var(--KeyEditBgHover)",
      "th-KeyEditShadow": "var(--KeyEditShadow)",
      "th-KeyEqualsBg": "var(--KeyEqualsBg)",
      "th-KeyEqualsBgHover": "var(--KeyEqualsBgHover)",
      "th-KeyEqualsShadow": "var(--KeyEqualsShadow)",
      "th-KeyMainBg": "var(--KeyMainBg)",
      "th-KeyMainBgHover": "var(--KeyMainBgHover)",
      "th-KeyMainShadow": "var(--KeyMainShadow)",

      "th-TextHeader": "var(--TextHeader)",
      "th-TextMainBtn": "var(--TextMainBtn)",
      "th-TextEditBtn": "var(--TextEditBtn)",
      "th-TextEqualsBtn": "var(--TextEqualsBtn)",

      "th-TextDark": "var(--TextDark)",
      "th-TextLight": "var(--TextLight)",
      "th-TextWhite": "var(--TextWhite)",
    },
    extend: {
      fontFamily: {
        leagueSpartanBold: "LeagueSpartan-Bold",
      },
    },
  },
  plugins: [],
}
