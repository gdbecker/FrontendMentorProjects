import React from 'react'
import Image from 'next/image';
import Avatar from '../../public/image-victor.jpg';

function ProfileCard() {
  return (
    <div id="profile">
      <div className="row profile-background">
      </div>
      <div className="row">
        <div className="profile-wrapper">
          <Image
            src={Avatar}
            alt="Profile-Image"
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <div className="d-inline-flex flex-row profile-header">
        <div className="p-1">
          <h1 className="profile-name">Victor Crest</h1>
        </div>
        <div className="p-1">
          <p className="profile-count">26</p>
        </div> 
      </div>
      <div className="flex-row">
        <p className="profile-loc">London</p>
      </div>
      <div className="row">
        <div className="col">
          <hr className="divider"></hr>
        </div>          
      </div>
      <div className="row mt-1">
        <div className="container stats-box">
          <div className="row">
            <div className="col">
              <div className="row">
                <h2 className="stats-header">80K</h2>
              </div>
              <div className="row">
                <p className="stats-text">Followers</p>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h2 className="stats-header">803K</h2>
              </div>
              <div className="row">
                <p className="stats-text">Likes</p>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h2 className="stats-header">1.4K</h2>
              </div>
              <div className="row">
                <p className="stats-text">Photos</p>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;
