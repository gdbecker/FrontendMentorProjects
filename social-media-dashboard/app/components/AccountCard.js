import React from 'react';
import Image from 'next/image';
import IconFacebook from '../../public/icon-facebook.svg';
import IconTwitter from '../../public/icon-twitter.svg';
import IconInstagram from '../../public/icon-instagram.svg';
import IconYouTube from '../../public/icon-youtube.svg';
import IconUp from '../../public/icon-up.svg';
import IconDown from '../../public/icon-down.svg';

function AccountCard({ social, handle, value, title, direction, count }) {
  function getDirectionIcon(direction) {
    if (direction === 'up') {
      return IconUp;
    } else if (direction === 'down') {
      return IconDown;
    }
  }

  function getCountColor(direction) {
    if (direction == 'up') {
      return 'text-green font-interBold text-sm px-2';
    } else if (direction == 'down') {
      return 'text-red font-interBold text-sm px-2';
    }
  }

  function getBackground(social) {
    if (social == 'facebook') {
      return 'basis-1/5 flex-1 bg-facebook pt-1 rounded-md';
    } else if (social == 'twitter') {
      return 'basis-1/5 flex-1 bg-twitter pt-1 rounded-md';
    } else if (social == 'instagram') {
      return 'basis-1/5 flex-1 bg-gradient-to-r from-instagram-100 to-instagram-200 pt-1 rounded-md';
    } else if (social == 'youtube') {
      return 'basis-1/5 flex-1 bg-youtube pt-1 rounded-md';
    }
  }

  function getSocialIcon(social) {
    if (social == 'facebook') {
      return IconFacebook;
    } else if (social == 'twitter') {
      return IconTwitter;
    } else if (social == 'instagram') {
      return IconInstagram;
    } else if (social == 'youtube') {
      return IconYouTube;
    }
  }

  return (
    <a href="/" className={getBackground(social)}>
      <div className="bg-lightTheme-300 text-center justify-center rounded-bl-md rounded-br-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
        <div className="justify-center flex flex-row py-7">
          <Image src={getSocialIcon(social)} alt="Facebook" width={20} height={20}/>
          <p className="font-interBold text-sm text-lightTheme-400 px-2 dark:text-darkTheme-400">{handle}</p>
        </div>
        <h1 className="font-interBold text-6xl text-lightTheme-500 dark:text-darkTheme-500">{value}</h1>
        <p className="text-lightTheme-400 text-sm tracking-[0.4em] py-2 dark:text-darkTheme-400">{title}</p>
        <div className="justify-center flex flex-row py-5">
          <Image src={getDirectionIcon(direction)} alt="Up" width={10} height={10}/>
          <p className={getCountColor(direction)}>{count} Today</p>
        </div>
      </div>
    </a>
  )
}

export default AccountCard;