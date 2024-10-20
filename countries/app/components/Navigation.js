'use client'
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import { IoMoonOutline } from 'react-icons/io5'
import { IoMoonSharp } from 'react-icons/io5'

function Navigation() {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
      </>
    )
  }

  return (
    <div class="flex z-10 h-16 py-10 px-10 items-center justify-between overflow-hidden bg-white shadow-b-md md:px-20 2xl:px-44 dark:bg-darkBlue">
      <h1 className="flex font-nunitoSansExtraBold text-md text-veryDarkBlue-Light md:text-xl dark:text-white">Where in the world?</h1>
      <div className="flex flex-row justify-center">
        <button class="flex items-center justify-center text-veryDarkBlue-Light dark:text-white" onClick={()=> setTheme( theme === "dark" ? "light" : "dark")}>
          { theme == "dark" ? 
            (<IoMoonSharp /> ) : 
            (<IoMoonOutline />) 
          }
          <h1 className="flex pl-1 font-nunitoSansSemiBold text-sm">
            { theme == "dark" ? 
              (<span>Light Mode</span>) : 
              (<span>Dark Mode</span>) 
            }
          </h1>
        </button>
        
      </div>
      
    </div>
  )
}

export default Navigation;