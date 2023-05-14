'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import IconFacebook from '../public/icon-facebook.svg';
import IconTwitter from '../public/icon-twitter.svg';
import IconInstagram from '../public/icon-instagram.svg';
import IconYouTube from '../public/icon-youtube.svg';
import IconUp from '../public/icon-up.svg';
import IconDown from '../public/icon-down.svg';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const onClick = async (e) => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" h-screen bg-lightTheme-100 px-10 dark:bg-darkTheme-100">
        <section className="flex flex-col w-full min-h-[10vh] relative rounded-bl-xl rounded-br-xl bg-lightTheme-200 px-7 py-10 pb-20 text-left md:flex-row md:justify-between md:pb-36 dark:bg-darkTheme-200">
          <div>
            <h1 className="font-interBold text-2xl text-lightTheme-500 dark:text-darkTheme-500">Social Media Dashboard</h1>
            <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">Total Followers: 23,004</p>
          </div>
          <div className="py-6">
            <hr className="text-lightTheme-400 dark:text-darkTheme-400"></hr>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-interBold text-sm text-lightTheme-400 px-3 dark:text-darkTheme-400">Dark Mode</p>
            <label className="relative items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onClick={e => onClick(e)}></input>
              <div className="w-11 h-6 bg-lightToggle peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lightTheme-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:bg-lightTheme-100 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-lightTheme-100 after:border-none after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lightToggle dark:after:bg-darkTheme-100 dark:bg-gradient-to-r from-darkToggle-100 to-darkToggle-200"></div>
            </label>
          </div>

          <section className="flex flex-col w-full px-6 absolute left-0 right-0 top-[200px] md:flex-row md:justify-between md:top-[125px]">
            <a href="/" className="bg-facebook pt-1 mb-6 rounded-md">
              <div className="bg-lightTheme-300 text-center justify-center rounded-bl-md rounded-br-md px-10 hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
                <div className="justify-center flex flex-row py-7">
                  <Image src={IconFacebook} alt="Facebook" width={20} height={20}/>
                  <p className="font-interBold text-sm text-lightTheme-400 px-2 dark:text-darkTheme-400">@nathanf</p>
                </div>
                <h1 className="font-interBold text-6xl text-lightTheme-500 dark:text-darkTheme-500">1987</h1>
                <p className="text-lightTheme-400 text-sm tracking-[0.4em] py-2 dark:text-darkTheme-400">FOLLOWERS</p>
                <div className="justify-center flex flex-row py-5">
                  <Image src={IconUp} alt="Up" width={10} height={10}/>
                  <p className="text-green font-interBold text-sm px-2">12 Today</p>
                </div>
              </div>
            </a>

            <a href="/" className="bg-twitter pt-1 mb-6 rounded-md">
              <div className="bg-lightTheme-300 text-center justify-center rounded-bl-md rounded-br-md px-10 hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
                <div className="justify-center flex flex-row py-7">
                  <Image src={IconTwitter} alt="Twitter" width={20} height={20}/>
                  <p className="font-interBold text-sm text-lightTheme-400 px-2 dark:text-darkTheme-400">@nathanf</p>
                </div>
                <h1 className="font-interBold text-6xl text-lightTheme-500 dark:text-darkTheme-500">1044</h1>
                <p className="text-lightTheme-400 text-sm tracking-[0.4em] py-2 dark:text-darkTheme-400">FOLLOWERS</p>
                <div className="justify-center flex flex-row py-5">
                  <Image src={IconUp} alt="Up" width={10} height={10}/>
                  <p className="text-green font-interBold text-sm px-2">99 Today</p>
                </div>
              </div>
            </a>

            <a href="/" className="bg-gradient-to-r from-instagram-100 to-instagram-200 pt-1 mb-6 rounded-md">
              <div className="bg-lightTheme-300 text-center justify-center rounded-bl-md rounded-br-md px-10 hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
                <div className="justify-center flex flex-row py-7">
                  <Image src={IconInstagram} alt="Facebook" width={20} height={20}/>
                  <p className="font-interBold text-sm text-lightTheme-400 px-2 dark:text-darkTheme-400">@realnathanf</p>
                </div>
                <h1 className="font-interBold text-6xl text-lightTheme-500 dark:text-darkTheme-500">11k</h1>
                <p className="text-lightTheme-400 text-sm tracking-[0.4em] py-2 dark:text-darkTheme-400">FOLLOWERS</p>
                <div className="justify-center flex flex-row py-5">
                  <Image src={IconUp} alt="Up" width={10} height={10}/>
                  <p className="text-green font-interBold text-sm px-2">1099 Today</p>
                </div>
              </div>
            </a>

            <a href="/" className="bg-youtube pt-1 mb-6 rounded-md">
              <div className="bg-lightTheme-300 text-center justify-center rounded-bl-md rounded-br-md px-10 hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
                <div className="justify-center flex flex-row py-7">
                  <Image src={IconYouTube} alt="Twitter" width={20} height={20}/>
                  <p className="font-interBold text-sm text-lightTheme-400 px-2 dark:text-darkTheme-400">Nathan F.</p>
                </div>
                <h1 className="font-interBold text-6xl text-lightTheme-500 dark:text-darkTheme-500">8239</h1>
                <p className="text-lightTheme-400 text-sm tracking-[0.4em] py-2 dark:text-darkTheme-400">SUBSCRIBERS</p>
                <div className="justify-center flex flex-row py-5">
                  <Image src={IconDown} alt="Up" width={10} height={10}/>
                  <p className="text-red font-interBold text-sm px-2">144 Today</p>
                </div>
              </div>
            </a>

            
            

          </section>
        </section>
        
      </div>
    </div>
  )
}
