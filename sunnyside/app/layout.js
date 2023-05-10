import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Frontend Mentor | Sunnyside Agency Landing Page',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navigation />
      
        {children}

        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Garrett Becker</a>.
        </div>
      </body>
    </html>
  )
}
