import Image from 'next/image'
import StatsCard from './components/StatsCard';

export default function Home() {
  return (
    <div id="home-page" className="bg-veryDarkBlue px-5 py-20 md:px-10 md:py-40">
      <StatsCard />
    </div>
  )
}
