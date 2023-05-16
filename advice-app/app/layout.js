import './styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | Advice Generator App',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <div className="text-center font-manropeExtraBold text-sm">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="hover:text-violet-100">Frontend Mentor</a>. 
          Coded by <a href="#" className="hover:text-violet-100">Garrett Becker</a>.
        </div>
      </body>
    </html>
  )
}
