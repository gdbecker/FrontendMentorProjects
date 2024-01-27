import React from 'react';
import Image from 'next/image';
import Logo from '../../public/fem-logo-png.png';
import Avatar from '../../public/GarrettBecker.jpg';

function Navigation() {

  return (
    <div class="flex h-16 p-10 items-center justify-between font-heeboRegular overflow-hidden border-lightGray border-b-2 bg-white 2xl:px-36">
      <div className="flex items-center justify-between">
        <a class="flex items-center justify-center" href="https://www.frontendmentor.io/profile/gdbecker" target="_blank">
          <Image 
            src={Logo}
            alt="Frontend Mentor Logo"
            width={190}
            height={80}
            className="pr-2 mr-2 w-36 border-lightGray border-r-2 md:w-48"
          />
        </a>
        <h1 className="tracking-wider text-sm text-darkPurple md:text-lg">Showcase</h1>
      </div>
      <a class="flex items-center justify-center" href="https://github.com/gdbecker/FrontendMentorProjects/tree/main" target="_blank">
        <Image 
          src={Avatar}
          alt="Profile Photo"
          width={75}
          height={75}
          className="w-10 h-10 rounded-full border-lightGray border-2 md:w-12 md:h-12"
        />
      </a>
    </div>
  )
}

export default Navigation;