import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import MockupsImg from '../public/illustration-mockups.svg';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <div className="p-12 w-full h-full bg-violet bg-illustration bg-cover bg-top bg-no-repeat font-poppinsRegular text-white-100 text-center">
      <div className="flex">
        <Image src={Logo} alt="logo" width={175} height={125} />
      </div>
      <div className="flex flex-col gap-8 py-12 items-center justify-between md:flex-row md:items-start">
        <div className="flex">
          <Image src={MockupsImg} alt="mockups-illustration"  />
        </div>
        <div className="flex flex-col py-5 items-center md:max-w-[45vw] md:text-left md:items-start">
          <h1 className="font-poppinsSemiBold text-2xl leading-14 md:text-3xl">Build The Community Your Fans Will Love</h1>
          <p className="py-6 font-opensansRegular text-white-200 text-sm leading-6">
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
            Create connections with your users as you engage in genuine discussion. 
          </p>
          <button className="py-3 w-[50%] text-sm bg-white-100 text-violet shadow-md rounded-full hover:bg-magenta hover:text-white">
            Register
          </button>
        </div>
      </div>
      <div className="flex flex-row py-4 items-center justify-center md:justify-end md:py-0">
        <button className="flex p-2 mx-2 text-white-100 bg-violet rounded-full ring-1 ring-white-100 hover:text-magenta hover:ring-magenta">
          <FaFacebookF />
        </button>
        <button className="flex p-2 mx-2 text-white-100 bg-violet rounded-full ring-1 ring-white-100 hover:text-magenta hover:ring-magenta">
          <FaTwitter />
        </button>
        <button className="flex p-2 mx-2 text-white-100 bg-violet rounded-full ring-1 ring-white-100 hover:text-magenta hover:ring-magenta">
          <FaInstagram />
        </button>
      </div>
    </div>
  )
}

export default Home;
