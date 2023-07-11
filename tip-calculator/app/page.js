import React from 'react';
import Calc from './components/Calc';
import Image from 'next/image';
import Logo from '../public/logo.svg';

function Home() {

  return (
    <main className="min-h-fit bg-grayishCyan-200 font-spaceMonoBold">
      <div className="flex flex-col text-center items-center justify-center pt-14 md:px-10 md:py-28">
        <div className="flex h-14 w-20 mb-10 md:w-16 md:mb-18">
          <Image src={Logo} alt="Icon" width={80} height={80} className=""/>
        </div>
        <Calc />
      </div>
    </main>
  )
}

export default Home;
