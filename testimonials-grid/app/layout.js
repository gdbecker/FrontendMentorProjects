import './styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | Testimonials Grid Section',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <footer className="text-center font-barlowMedium text-sm">
          Challenge by <a href="https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7" target="_blank" className=" font-barlowMedium hover:text-violet-100">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/testimonials-grid" target="_blank" className="font-barlowMedium hover:text-violet-100">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
