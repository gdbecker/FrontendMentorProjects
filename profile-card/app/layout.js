import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Frontend Mentor | Profile Card Component',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <footer class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/profile-card" target="_blank">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
