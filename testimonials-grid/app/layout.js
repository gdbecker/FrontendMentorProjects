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

        <div className="text-center font-interRegular text-sm">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className=" font-barlowMedium hover:text-violet-100">Frontend Mentor</a>. 
          Coded by <a href="#" className="font-barlowMedium hover:text-violet-100">Garrett Becker</a>.
        </div>
      </body>
    </html>
  )
}
