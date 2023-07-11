'use client';
import React, { useState } from 'react';
// import LoadingPage from './loading';
import Image from 'next/image';
import Task from './components/Task';
import IconSun from '../public/icon-sun.svg';
import IconMoon from '../public/icon-moon.svg';
import IconCheck from '../public/icon-check.svg';
import IconCross from '../public/icon-cross.svg';

function Home() {
  // Dark mode functionality
  const [darkMode, setDarkMode] = useState(true);

  const changeTheme = async (e) => {
    setDarkMode(!darkMode);
  }

  // State variables
  const [newTask, setNewTask] = useState('');

  const onChangeNewTask = (e) => {
    setNewTask(e.target.value);
  }


  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-lightTheme-200 font-josefinSansRegular dark:bg-darkTheme-100">
        <div className="flex h-60 items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('../../public/bg-mobile-light.jpg')] md:bg-[url('../../public/bg-desktop-light.jpg')] dark:bg-[url('../../public/bg-mobile-dark.jpg')] dark:md:bg-[url('../../public/bg-desktop-dark.jpg')]">
          <div className="relative w-full md:w-[45%]">
            <div className="absolute flex-col -top-14 px-8 w-full text-center items-center justify-center">
              <div className="flex flex-row w-full justify-between">
                <h1 className="text-lightTheme-100 text-3xl font-josefinSansBold tracking-[0.70rem] md:text-4xl">TODO</h1>
                <button class="flex items-center justify-center" onClick={(e)=> changeTheme(e)}>
                  { darkMode ? 
                    (<Image src={IconSun} alt="Icon" width={25} height={25} className="pb-2" /> ) : 
                    (<Image src={IconMoon} alt="Icon" width={25} height={25} className="pb-2" />) 
                  }
                </button>
              </div>

              <div className="flex h-fit w-full mt-8 mb-5 bg-lightTheme-100 rounded-md">
                <div className="flex flex-row p-5 items-center">
                  <button 
                    className="flex p-3 rounded-full ring-1 ring-lightTheme-300">
                  </button>
                  <input 
                    className="w-full ml-4 bg-lightTheme-100 focus:outline-none" 
                    id="newTask" 
                    type="text" 
                    placeholder="Create a new todo..."
                    value={newTask}
                    onChange={e => onChangeNewTask(e)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col h-fit w-full mb-5 bg-lightTheme-100 rounded-md">
                <div className="flex flex-row w-full justify-between p-5 items-center border-b-[1px] border-lightTheme-300">
                  <div className="flex flex-row">
                    <button 
                      className="flex p-3 rounded-full ring-1 ring-lightTheme-300">
                    </button>
                    <p className="pl-4 text-lightTheme-500">Example task</p>
                  </div>
                  <button 
                    className="flex">
                    <Image src={IconCross} alt="Icon" width={15} height={15} className="" />
                  </button>
                </div>

                <div className="flex flex-row w-full justify-between p-5 items-center border-b-[1px] border-lightTheme-300">
                  <div className="flex flex-row">
                    <button 
                      className="flex p-3 rounded-full ring-1 ring-lightTheme-300">
                    </button>
                    <p className="pl-4 text-lightTheme-500">Example task</p>
                  </div>
                  <button 
                    className="flex">
                    <Image src={IconCross} alt="Icon" width={15} height={15} className="" />
                  </button>
                </div>

                <div className="flex flex-row w-full justify-between p-5 items-center">
                  <div className="flex flex-row">
                    <button 
                      className="flex p-3 rounded-full ring-1 ring-lightTheme-300">
                    </button>
                    <p className="pl-4 text-lightTheme-500">Example task</p>
                  </div>
                  <button 
                    className="flex">
                    <Image src={IconCross} alt="Icon" width={15} height={15} className="" />
                  </button>
                </div>
                
              </div>

              <div className="flex flex-row h-fit w-full p-5 bg-lightTheme-100 rounded-md justify-center">
                <button className="px-2 font-josefinSansBold text-lg">All</button>
                <button className="px-2 font-josefinSansBold text-lg">Active</button>
                <button className="px-2 font-josefinSansBold text-lg">Completed</button>
              </div>

              

              
              
              {/* Map out all tasks from db */}
              {/* <Task /> */}

            </div>
          </div>
          
        </div>
        
      </div>
    </main>
  )
}

export default Home;
