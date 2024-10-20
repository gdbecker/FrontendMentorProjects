import './styles/globals.css'
import Navigation from './components/Navigation'
import { Providers } from './providers';

export const metadata = {
  title: 'Frontend Mentor | Countries API',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-veryLightGray dark:bg-veryDarkBlue-Dark">
      
        <Providers>
          <Navigation />
          {children}
        </Providers>

        <footer className="bg-white py-2 shadow-t-md text-center font-nunitoSansSemiBold text-veryDarkBlue-Light text-sm dark:bg-darkBlue dark:text-white">
          Challenge by <a href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca" target="_blank" className=" font-nunitoSansSemiBold hover:text-darkGray">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/countries" target="_blank" className="font-nunitoSansSemiBold hover:text-darkGray">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}
