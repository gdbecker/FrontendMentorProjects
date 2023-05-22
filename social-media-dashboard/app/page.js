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
    <div className={darkMode ? "dark" : ""}>
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

          {/* <a href="/" className="basis-1/5 flex-1 bg-facebook pt-1 rounded-md">
            <div className="bg-lightTheme-300 text-center justify-center rounded-bl-md rounded-br-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
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
          <a href="/" className="basis-1/5 flex-1 bg-twitter pt-1 rounded-md">
            <div className="bg-lightTheme-300 text-center justify-center rounded-bl-md rounded-br-md px-14 hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
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
          <a href="/" className="basis-1/5 flex-1 bg-gradient-to-r from-instagram-100 to-instagram-200 pt-1 rounded-md">
            <div className="bg-lightTheme-300 text-center justify-center rounded-bl-md rounded-br-md px-14 hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
              <div className="justify-center flex flex-row py-7">
                <Image src={IconInstagram} alt="Facebook" width={20} height={20}/>
                <p className="font-interBold text-sm text-lightTheme-400 px-2 dark:text-darkTheme-400">@realnathanf</p>
              </div>
              <h1 className="font-interBold text-6xl text-lightTheme-500 dark:text-darkTheme-500">11k</h1>
              <p className="text-lightTheme-400 text-sm tracking-[0.4em] py-2 dark:text-darkTheme-400">FOLLOWERS</p>
              <div className="flex flex-row justify-center py-5">
                <Image src={IconUp} alt="Up" width={10} height={10}/>
                <p className="text-green font-interBold text-sm px-2">1099 Today</p>
              </div>
            </div>
          </a>
          <a href="/" className="basis-1/5 flex-1 bg-youtube pt-1 rounded-md">
            <div className="bg-lightTheme-300 text-center justify-center rounded-bl-md rounded-br-md px-14 hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
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
          </a> */}
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

            {/* <a href="/" className="basis-1/5 flex-1 grid grid-cols-2 px-8 py-6 bg-lightTheme-300 rounded-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
              <div className="flex h-10 items-start justify-left">
                <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">Page Views</p>
              </div>
              <div className="flex h-10 items-start justify-end">
                <Image src={IconFacebook} alt="Facebook" width={18} height={18} className=""/>
              </div>
              <div className="flex h-10 items-end justify-start">
                <h2 className="font-interBold text-lightTheme-500 text-4xl dark:text-darkTheme-500">87</h2>
              </div>
              <div className="flex h-10 items-end justify-end">
                <div className="flex">
                  <Image src={IconUp} alt="Up" width={10} height={10} className=""/>
                  <p className="text-green font-interBold text-sm ml-2">3%</p>
                </div>
              </div>
            </a>
            <a href="/" className="basis-1/5 flex-1 grid grid-cols-2 px-8 py-6 bg-lightTheme-300 rounded-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
              <div className="flex h-10 items-start justify-left">
                <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">Likes</p>
              </div>
              <div className="flex h-10 items-start justify-end">
                <Image src={IconFacebook} alt="Facebook" width={18} height={18} className=""/>
              </div>
              <div className="flex h-10 items-end justify-start">
                <h2 className="font-interBold text-lightTheme-500 text-4xl dark:text-darkTheme-500">52</h2>
              </div>
              <div className="flex h-10 items-end justify-end">
                <div className="flex">
                  <Image src={IconDown} alt="Up" width={10} height={10} className=""/>
                  <p className="text-red font-interBold text-sm ml-2">2%</p>
                </div>
              </div>
            </a>
            <a href="/" className="basis-1/5 flex-1 grid grid-cols-2 px-8 py-6 bg-lightTheme-300 rounded-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
              <div className="flex h-10 items-start justify-left">
                <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">Likes</p>
              </div>
              <div className="flex h-10 items-start justify-end">
                <Image src={IconInstagram} alt="Facebook" width={18} height={18} className=""/>
              </div>
              <div className="flex h-10 items-end justify-start">
                <h2 className="font-interBold text-lightTheme-500 text-4xl dark:text-darkTheme-500">5462</h2>
              </div>
              <div className="flex h-10 items-end justify-end">
                <div className="flex">
                  <Image src={IconUp} alt="Up" width={10} height={10} className=""/>
                  <p className="text-green font-interBold text-sm ml-2">2257%</p>
                </div>
              </div>
            </a>
            <a href="/" className="basis-1/5 flex-1 grid grid-cols-2 px-8 py-6 bg-lightTheme-300 rounded-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
              <div className="flex h-10 items-start justify-left">
                <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">Profile Views</p>
              </div>
              <div className="flex h-10 items-start justify-end">
                <Image src={IconInstagram} alt="Facebook" width={18} height={18} className=""/>
              </div>
              <div className="flex h-10 items-end justify-start">
                <h2 className="font-interBold text-lightTheme-500 text-4xl dark:text-darkTheme-500">52k</h2>
              </div>
              <div className="flex h-10 items-end justify-end">
                <div className="flex">
                  <Image src={IconUp} alt="Up" width={10} height={10} className=""/>
                  <p className="text-green font-interBold text-sm ml-2">1375%</p>
                </div>
              </div>
            </a>
            <a href="/" className="basis-1/5 flex-1 grid grid-cols-2 px-8 py-6 bg-lightTheme-300 rounded-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
              <div className="flex h-10 items-start justify-left">
                <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">Retweets</p>
              </div>
              <div className="flex h-10 items-start justify-end">
                <Image src={IconTwitter} alt="Facebook" width={18} height={18} className=""/>
              </div>
              <div className="flex h-10 items-end justify-start">
                <h2 className="font-interBold text-lightTheme-500 text-4xl dark:text-darkTheme-500">117</h2>
              </div>
              <div className="flex h-10 items-end justify-end">
                <div className="flex">
                  <Image src={IconUp} alt="Up" width={10} height={10} className=""/>
                  <p className="text-green font-interBold text-sm ml-2">303%</p>
                </div>
              </div>
            </a>
            <a href="/" className="basis-1/5 flex-1 grid grid-cols-2 px-8 py-6 bg-lightTheme-300 rounded-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
              <div className="flex h-10 items-start justify-left">
                <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">Likes</p>
              </div>
              <div className="flex h-10 items-start justify-end">
                <Image src={IconTwitter} alt="Facebook" width={18} height={18} className=""/>
              </div>
              <div className="flex h-10 items-end justify-start">
                <h2 className="font-interBold text-lightTheme-500 text-4xl dark:text-darkTheme-500">507</h2>
              </div>
              <div className="flex h-10 items-end justify-end">
                <div className="flex">
                  <Image src={IconUp} alt="Up" width={10} height={10} className=""/>
                  <p className="text-green font-interBold text-sm ml-2">553%</p>
                </div>
              </div>
            </a>
            <a href="/" className="basis-1/5 flex-1 grid grid-cols-2 px-8 py-6 bg-lightTheme-300 rounded-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
              <div className="flex h-10 items-start justify-left">
                <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">Likes</p>
              </div>
              <div className="flex h-10 items-start justify-end">
                <Image src={IconYouTube} alt="Facebook" width={18} height={18} className=""/>
              </div>
              <div className="flex h-10 items-end justify-start">
                <h2 className="font-interBold text-lightTheme-500 text-4xl dark:text-darkTheme-500">107</h2>
              </div>
              <div className="flex h-10 items-end justify-end">
                <div className="flex">
                  <Image src={IconDown} alt="Up" width={10} height={10} className=""/>
                  <p className="text-red font-interBold text-sm ml-2">19%</p>
                </div>
              </div>
            </a>
            <a href="/" className="basis-1/5 flex-1 grid grid-cols-2 px-8 py-6 bg-lightTheme-300 rounded-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
              <div className="flex h-10 items-start justify-left">
                <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">Total Views</p>
              </div>
              <div className="flex h-10 items-start justify-end">
                <Image src={IconYouTube} alt="Facebook" width={18} height={18} className=""/>
              </div>
              <div className="flex h-10 items-end justify-start">
                <h2 className="font-interBold text-lightTheme-500 text-4xl dark:text-darkTheme-500">1407</h2>
              </div>
              <div className="flex h-10 items-end justify-end">
                <div className="flex">
                  <Image src={IconDown} alt="Up" width={10} height={10} className=""/>
                  <p className="text-red font-interBold text-sm ml-2">12%</p>
                </div>
              </div>
            </a> */}
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default Home;
