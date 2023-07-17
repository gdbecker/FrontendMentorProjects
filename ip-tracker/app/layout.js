import './styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | IP Address Tracker',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* <link 
          rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""></link>

        <script 
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossorigin=""></script> */}
      
        {children}

        <footer className="text-center font-rubikRegular text-veryDarkGray text-sm">
          Challenge by <a href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0" target="_blank" className=" font-rubikRegular hover:text-darkGray">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main/ip-tracker" target="_blank" className="font-rubikRegular hover:text-darkGray">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}