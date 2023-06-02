import './styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | Advice Generator App',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <footer className="text-center font-manropeExtraBold text-sm">
          Challenge by <a href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db" target="_blank" className="hover:text-green">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/advice-app" target="_blank" className="hover:text-green">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
