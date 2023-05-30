import './styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | Stats Preview Card Component',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <footer className="text-center font-interRegular text-sm">
          Challenge by <a href="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62/hub" target="_blank" className="font-interBold hover:text-violet">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/stats-card" target="_blank" className="font-interBold hover:text-violet">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
