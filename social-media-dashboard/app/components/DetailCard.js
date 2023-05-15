import React from 'react';
import Image from 'next/image';
import IconFacebook from '../../public/icon-facebook.svg';
import IconTwitter from '../../public/icon-twitter.svg';
import IconInstagram from '../../public/icon-instagram.svg';
import IconYouTube from '../../public/icon-youtube.svg';
import IconUp from '../../public/icon-up.svg';
import IconDown from '../../public/icon-down.svg';

function DetailCard({ title, value, social, percent, direction, darkMode }) {
  function getDirectionIcon(direction) {
    if (direction == 'up') {
      return IconUp;
    } else if (direction == 'down') {
      return IconDown;
    }
  }

  function getPercentColor(direction) {
    if (direction == 'up') {
      return 'text-green font-interBold text-sm ml-2';
    } else if (direction == 'down') {
      return 'text-red font-interBold text-sm ml-2';
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
    <a href="/" className="basis-1/5 flex-1 grid grid-cols-2 px-8 py-6 bg-lightTheme-300 rounded-md hover:bg-lightToggle dark:bg-darkTheme-300 dark:hover:bg-lightTheme-400">
      <div className="flex h-10 items-start justify-left">
        <p className="font-interBold text-sm text-lightTheme-400 dark:text-darkTheme-400">{title}</p>
      </div>
      <div className="flex h-10 items-start justify-end">
        <Image src={getSocialIcon(social)} alt="Icon" width={18} height={18} className=""/>
      </div>
      <div className="flex h-10 items-end justify-start">
        <h2 className="font-interBold text-lightTheme-500 text-4xl dark:text-darkTheme-500">{value}</h2>
      </div>
      <div className="flex h-10 items-end justify-end">
        <div className="flex">
          <Image src={getDirectionIcon(direction)} alt="Up" width={10} height={10} className=""/>
          <p className={getPercentColor(direction)}>{percent}%</p>
        </div>
      </div>
    </a>
  )
}

export default DetailCard;