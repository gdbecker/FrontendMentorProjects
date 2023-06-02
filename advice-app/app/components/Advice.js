import React from 'react';
import Image from 'next/image';
import IconDividerDesktop from '../../public/pattern-divider-desktop.svg';
import IconDividerMobile from '../../public/pattern-divider-mobile.svg';
import IconDice from '../../public/icon-dice.svg';

function Advice({ data, fetchNewData }) {

  const onClick = async (e) => {
    fetchNewData();
  }

  return (
    <div className="relative bg-darkGrayishBlue mt-10 px-10 pb-14 min-h-full rounded-lg md:w-[60vh]">
      <div className="flex flex-col">
        <h1 className="text-green text-center text-xs tracking-[0.2em] pt-10 pb-2">ADVICE #{data.id}</h1>
        <h2 className="text-cyan text-xl py-4">"{data.advice}"</h2>
        <div className="flex flex-row">
          <Image 
            src={IconDividerDesktop}
            alt="icon-divider"
            width={'120%'}
            height={'100%'}
            className="mx-auto py-2"
          />
        </div>
        <div className="flex flex-row">
          <button onClick={onClick} className="absolute m-auto left-0 right-0 bottom-[-30px] bg-green py-4 w-[60px] h-[60px] rounded-full hover:shadow-[0_0px_30px] hover:shadow-green">
            <Image 
              src={IconDice}
              alt="icon-dice"
              width={'20px'}
              height={'20px'}
              className="mx-auto"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Advice;
