import './styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | Social Media Dashboard with Theme Switcher',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <footer className="text-center font-interRegular text-sm">
          Challenge by <a href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H" target="_blank" className=" font-interBold hover:text-lightTheme-400">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/social-media-dashboard" target="_blank" className="font-interBold hover:text-lightTheme-400">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
