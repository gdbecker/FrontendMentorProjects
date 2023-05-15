import './styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Frontend Mentor | Social Media Dashboard with Theme Switcher',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <div className="text-center font-interRegular text-sm">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className=" font-interBold hover:text-lightTheme-400">Frontend Mentor</a>. 
          Coded by <a href="#" className="font-interBold hover:text-lightTheme-400">Garrett Becker</a>.
        </div>
      </body>
    </html>
  )
}
