import React from 'react';
import Calc from './components/Calc';

function Home() {

  return (
    <main className="min-h-screen bg-th-MainBg font-leagueSpartanBold">
      <div className="flex flex-col text-center items-center justify-center p-8 md:py-20">
        <Calc />
      </div>
    </main>
  )
}

export default Home;