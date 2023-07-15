'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import IconLocation from '../public/icon-location.svg';
import { BiChevronRight } from 'react-icons/bi';

function Home() {

  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [ipSearch, setIPSearch] = useState('');

  // Update IP Address to search
  const onChangeIPAddress = (e) => {
    setIPSearch(e.currentTarget.value);
  }

  // Set up app for viewing
  useEffect(() => {
    setIsLoading(false);
  }, [])

  if (!isLoading) {
    return (
      <main className="min-h-screen bg-offWhite">
        <div className="flex h-80 md:h-64 items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('../../public/pattern-bg-mobile.png')] md:bg-[url('../../public/pattern-bg-desktop.png')]">
          <div className="relative w-full md:w-[85%] lg:w-[75%] xl:w-[75%] 2xl:w-[60%]">
            <div className="absolute flex-col -top-32 px-8 w-full text-center items-center justify-center md:-top-24">
              <div className="flex flex-row w-full items-center justify-center">
                <h1 className="text-offWhite text-3xl font-rubikMedium lg:text-3xl">IP Address Tracker</h1>
              </div>
              <div className="flex flex-row w-full h-full mt-7 justify-center md:px-44">
                <input 
                  className="flex w-full pl-7 bg-offWhite text-veryDarkGray font-rubikRegular rounded-tl-xl rounded-bl-xl rounded-tr-none rounded-br-none focus:outline-none" 
                  id="ipAddress" 
                  type="text" 
                  ipSearch="Search for any IP address or domain"
                  value={ipSearch}
                  onChange={e => onChangeIPAddress(e)}
                  required
                />
                <button
                  className="p-3 bg-veryDarkGray text-offWhite text-3xl rounded-tr-xl rounded-br-xl hover:bg-darkGray">
                  <BiChevronRight />
                </button>
              </div>
              <div className="flex flex-row py-7 mt-9 bg-offWhite rounded-xl justify-center">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-7">
                  <div className="flex flex-col px-7 text-center md:text-left">
                    <h1 className="text-[0.6rem] text-darkGray font-rubikBold tracking-[0.08rem]">IP ADDRESS</h1>
                    <h2 className="mt-2 text-xl text-veryDarkGray font-rubikMedium">192.212.174.072</h2>
                  </div>
                  <div className="flex flex-col px-7 text-center md:text-left md:border-l-[1px] md:border-darkGray">
                    <h1 className="text-[0.6rem] text-darkGray font-rubikBold tracking-[0.08rem]">LOCATION</h1>
                    <h2 className="mt-2 text-xl text-veryDarkGray font-rubikMedium">Brooklyn, NY 10001</h2>
                  </div>
                  <div className="flex flex-col px-7 text-center md:text-left md:border-l-[1px] md:border-darkGray">
                    <h1 className="text-[0.6rem] text-darkGray font-rubikBold tracking-[0.08rem]">TIMEZONE</h1>
                    <h2 className="mt-2 text-xl text-veryDarkGray font-rubikMedium">UTC-05:00</h2>
                  </div>
                  <div className="flex flex-col px-7 text-center md:text-left md:border-l-[1px] md:border-darkGray">
                    <h1 className="text-[0.6rem] text-darkGray font-rubikBold tracking-[0.08rem]">ISP</h1>
                    <h2 className="mt-2 text-xl text-veryDarkGray font-rubikMedium">SpaceX Starlink</h2>
                  </div>
                  
                </div>
              </div>

  

            </div>
          </div>     
        </div>      
      </main>
    )
  }
  
}

export default Home;