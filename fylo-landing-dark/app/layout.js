import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Frontend Mentor | Fylo Landing Page - Dark Theme',
  description: 'Solutiion for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />
      
        {children}

        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Garrett Becker</a>.
        </div>
      </body>
    </html>
  )
}
