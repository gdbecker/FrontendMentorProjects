/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: { 
      "white": "hsl(0, 0%, 100%)",
      "darkBlue": "#1c2023",
      "red": "#ec2c4c",
      "lightGray": "hsl(0, 0%, 81%)",
      "grayishBlue": "hsl(217, 19%, 35%)",
      "lightPurple": "#b5bedd",
      "darkPurple": "#3e53a2",
      "level1": "#89ccd9",
      "level2": "#b1dc52",
      "level3": "#f4b404",
      "level4": "#f48c24",
      "level5": "#ec2c4c",

    },
    extend: {
      fontFamily: {
        heeboRegular: "Heebo-Regular",
        heeboBold: "Heebo-Bold",
      },
    },
  },
  plugins: [],
}
