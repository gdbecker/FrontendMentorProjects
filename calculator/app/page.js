import React from 'react';
import Calc from './components/Calc';

function Home() {

  return (
    <main className="min-h-screen font-leagueSpartanBold">
      <div className="flex flex-col text-center items-center justify-center py-32">
        <Calc />
      </div>
    </main>
  )
}

export default Home;