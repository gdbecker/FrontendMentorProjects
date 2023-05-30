import React from 'react';

function StatsCard() {
  return (
    <div id="stats-card" className="text-center md:text-left min-h-screen ">
      <div className="flex flex-col justify-center items-center rounded-lg overflow-hidden md:flex-row-reverse">
        <div className=" flex w-full h-72 bg-violet bg-blend-multiply bg-[url('../../public/image-header-mobile.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('../../public/image-header-desktop.jpg')] md:h-96">
        </div>
        <div className="w-full h-fit justify-between bg-darkDesaturatedBlue font-interRegular px-20 py-10 md:px-16 md:py-14 md:h-96">
          <h1 className="py-2 text-white-100 text-3xl font-interBold">Get <span className="text-violet">insights</span> that help your business grow.</h1>
          <p className="py-5 text-white-200 text-sm leading-6">
            Discover the benefits of data analytics and make better decisions regarding revenue, customer 
            experience, and overall efficiency.
          </p>
          <div className="flex flex-col justify-between items-center md:flex-row">
            <div className="py-5">
              <h2 className="font-interBold text-white-100 text-2xl">10k+</h2>
              <p className="font-lexenddecaRegular text-white-300 text-sm tracking-wider">COMPANIES</p>
            </div>
            <div className="py-5">
              <h2 className="font-interBold text-white-100 text-2xl">314</h2>
              <p className="font-lexenddecaRegular text-white-300 text-sm tracking-wider">TEMPLATES</p>
            </div>
            <div className="py-5">
              <h2 className="font-interBold text-white-100 text-2xl">12M+</h2>
              <p className="font-lexenddecaRegular text-white-300 text-sm tracking-wider">QUERIES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard;
