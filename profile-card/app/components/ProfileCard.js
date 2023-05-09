import React from 'react'
import Image from 'next/image';
import Avatar from '../..public/image-victor.jpg';

function ProfileCard() {
  return (
    <div id="profile">
      <Image
        src={Avatar}
        alt="cat-image"
        layout='fill'
        objectFit='contain'
      />
    </div>
  )
}

export default ProfileCard;
