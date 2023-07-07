'use client';
import React from 'react';
import Calc from './components/Calc';
import Image from 'next/image';
import Logo from '../public/logo.svg';

function Home() {

  return (
    <main className="min-h-screen bg-grayishCyan-200 font-spaceMonoBold">
      <div className="flex flex-col text-center items-center justify-center px-4 py-28">
        <Logo />
        <Calc />
      </div>
    </main>
  )
}

export default Home;
