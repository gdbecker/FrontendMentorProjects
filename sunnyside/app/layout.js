import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Frontend Mentor | Sunnyside Agency Landing Page',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navigation />
      
        {children}

        <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/sunnyside" target="_blank">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
