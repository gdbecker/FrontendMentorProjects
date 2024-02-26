import './styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | Tip Calculator App',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <footer className="text-center font-spaceMonoBold text-xs p-2">
          Challenge by <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX" target="_blank" className="hover:text-strongCyan">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/tip-calculator" target="_blank" className="hover:text-strongCyan">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
