import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Frontend Mentor | 3-Column Preview Card Component',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <footer class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/3-column-card" target="_blank">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
