import './styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | Huddle Landing Page',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <footer className="text-center font-poppinsRegular text-sm">
          Challenge by <a href="https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0" target="_blank" className="hover:text-violet">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/huddle-landing" target="_blank" className="hover:text-violet">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
