import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Frontend Mentor | Fylo Landing Page - Dark Theme',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />
      
        {children}

        <footer class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/fylo-landing-dark" target="_blank">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
