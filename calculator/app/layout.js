import './styles/globals.css'
import {Providers} from './providers';

export const metadata = {
  title: 'Frontend Mentor | Calculator App',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link href="https://cdn.jsdelivr.net/css-toggle-switch/latest/toggle-switch.css" rel="stylesheet" />

        <Providers>
          {children}
        </Providers>

        <footer className="text-center font-leagueSpartanBold text-sm">
          Challenge by <a href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29" target="_blank" className="hover:text-th-KeyEqualsBg">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/calculator" target="_blank" className="hover:text-th-KeyEqualsBg">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
