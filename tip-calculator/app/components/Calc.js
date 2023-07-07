import React from 'react';
import Image from 'next/image';
import IconDollar from '../../public/icon-dollar.svg';
import IconPerson from '../../public/icon-person.svg';

function Calc() {

  return (
    <div className="relative bg-darkGrayishBlue mt-10 px-10 pb-14 min-h-full rounded-lg md:w-[60vh]">
      <div className="flex flex-col">
        <h1 className="text-green text-center text-xs tracking-[0.2em] pt-10 pb-2">ADVICE</h1>
        <h2 className="text-cyan text-xl py-4"></h2>
        
      </div>
    </div>
  )
}

export default Calc;