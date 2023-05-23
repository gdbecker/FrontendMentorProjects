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

        <div className="text-center font-poppinsRegular text-sm">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="hover:text-violet">Frontend Mentor</a>. 
          Coded by <a href="#" className="hover:text-violet">Garrett Becker</a>.
        </div>
      </body>
    </html>
  )
}
