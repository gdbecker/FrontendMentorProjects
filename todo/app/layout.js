import './styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | Todo App',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <footer className="text-center font-josefinSansRegular text-darkTheme-100 text-sm">
          Challenge by <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank" className=" font-josefinSansRegular hover:text-brightBlue">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/todo" target="_blank" className="font-josefinSansRegular hover:text-brightBlue">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
