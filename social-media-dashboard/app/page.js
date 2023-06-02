'use client';
import React, { useState } from 'react';
import LoadingPage from './loading';
import DetailCard from './components/DetailCard';
import AccountCard from './components/AccountCard';

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const onClick = async (e) => {
    setDarkMode(!darkMode);
  }

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className=" min-h-screen bg-lightTheme-100 px-10 dark:bg-darkTheme-100">
        <section className="flex flex-col w-full min-h-[10vh] rounded-bl-xl rounded-br-xl bg-lightTheme-200 bg-50 px-7 py-10 pb-16 text-left lg:flex-row lg:justify-between lg:pb-40 dark:bg-darkTheme-200">
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
              <div className="w-11 h-6 bg-lightToggle peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lightTheme-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:bg-lightTheme-100 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-lightTheme-100 after:border-none after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lightToggle hover:bg-gradient-to-r from-darkToggle-100 to-darkToggle-200 dark:after:bg-darkTheme-100 dark:bg-gradient-to-r from-darkToggle-100 to-darkToggle-200"></div>
            </label>
          </div>
        </section>

        <section className="flex flex-col gap-x-8 gap-y-5 w-full px-6 pb-10 mt-[-40px] lg:flex-row lg:flex-wrap lg:mt-[-125px]">  
          <AccountCard 
            social="facebook"
            handle="@nathanf"
            value="1987"
            title="FOLLOWERS"
            direction="up"
            count="12"
          />

          <AccountCard 
            social="twitter"
            handle="@nathanf"
            value="1044"
            title="FOLLOWERS"
            direction="up"
            count="99"
          />

          <AccountCard 
            social="instagram"
            handle="@realnathanf"
            value="11k"
            title="FOLLOWERS"
            direction="up"
            count="1099"
          />

          <AccountCard 
            social="youtube"
            handle="Nathan F."
            value="8239"
            title="SUBSCRIBERS"
            direction="down"
            count="144"
          />
        </section>

        <section className="px-6 pb-10">
          <h1 className="py-4 font-interBold text-2xl text-lightTheme-400 dark:text-darkTheme-500">Overview - Today</h1>
          <div className="flex flex-col gap-x-8 gap-y-5 w-full lg:flex-row lg:flex-wrap">
            <DetailCard 
              title="Page Views"
              value="87"
              social="facebook"
              percent="3"
              direction="up"
              darkMode={darkMode}
            />

            <DetailCard 
              title="Likes"
              value="52"
              social="facebook"
              percent="2"
              direction="down"
              darkMode={darkMode}
            />

            <DetailCard 
              title="Likes"
              value="5462"
              social="instagram"
              percent="2275"
              direction="up"
              darkMode={darkMode}
            />

            <DetailCard 
              title="Profile Views"
              value="52k"
              social="instagram"
              percent="1375"
              direction="up"
              darkMode={darkMode}
            />

            <DetailCard 
              title="Retweets"
              value="117"
              social="twitter"
              percent="303"
              direction="up"
              darkMode={darkMode}
            />

            <DetailCard 
              title="Likes"
              value="507"
              social="twitter"
              percent="553"
              direction="up"
              darkMode={darkMode}
            />

            <DetailCard 
              title="Likes"
              value="107"
              social="youtube"
              percent="30193"
              direction="down"
              darkMode={darkMode}
            />

            <DetailCard 
              title="Total Views"
              value="1407"
              social="youtube"
              percent="12"
              direction="down"
              darkMode={darkMode}
            /> 
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home;
