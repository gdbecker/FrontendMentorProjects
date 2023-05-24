import './styles/globals.css'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'Frontend Mentor Showcase',
  description: 'Solutions for Frontend Mentor Challenges!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        <Navigation />
        {children}

        <footer className="text-center font-heeboRegular text-sm">
          Challenges by <a href="https://www.frontendmentor.io" target="_blank" className=" font-heeboRegular hover:text-darkPurple">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main" target="_blank" className="font-heeboRegular hover:text-darkPurple">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}