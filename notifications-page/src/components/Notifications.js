import React, { useState } from 'react';

function Notifications() {

  const [clicked, setClicked] = useState('');

  const onClick = async (e) => {
    setClicked(true);
  }

  return (
    <div id="notifications">
      <div className="container">
        <div className="row g-1">
          <div className="col col-title">
            <h1 className="title">Notifications <span className="title-number">{ clicked ? 0 : 3 }</span></h1>
          </div>
          <div className="col col-mark">
            <button type="button" className="mark-btn" onClick={e => onClick(e)}>Mark all as read</button>
          </div>
        </div>

        <div className="row mt-1 g-2">
          <div className={clicked ? "notification-row read" : "notification-row unread"}>
            <div className="notification-row-details">
                <div className="avatar-wrapper" style={{ backgroundImage: `url(${require("../assets/avatar-mark-webber.webp")})` }}></div>
                <div>
                  <p className="notification-text"><span><a href="/" className="a-name">Mark Webber</a></span> reacted to your recent post <a href="/" className="a-noun">My first tournament today!</a> <span className={clicked ? "" : "unread-dot"}></span></p>
                  <p className="notification-text time">1m ago</p>
                </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 g-2">
          <div className={clicked ? "notification-row read" : "notification-row unread"}>
            <div className="notification-row-details">
                <div className="avatar-wrapper" style={{ backgroundImage: `url(${require("../assets/avatar-angela-gray.webp")})` }}></div>
                <div>
                  <p className="notification-text"><span><a href="/" className="a-name">Angela Gray</a></span> followed you <span className={clicked ? "" : "unread-dot"}></span></p>
                  <p className="notification-text time">5m ago</p>
                </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 g-2">
          <div className={clicked ? "notification-row read" : "notification-row unread"}>
            <div className="notification-row-details">
                <div className="avatar-wrapper" style={{ backgroundImage: `url(${require("../assets/avatar-jacob-thompson.webp")})` }}></div>
                <div>
                  <p className="notification-text"><span><a href="/" className="a-name">Jacob Thompson</a></span> has joined your group <a href="/" className="a-noun">Chess Club</a> <span className={clicked ? "" : "unread-dot"}></span></p>
                  <p className="notification-text time">1 day ago</p>
                </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 g-2">
          <div className={clicked ? "notification-row read" : "notification-row read"}>
            <div className="notification-row-details">
                <div className="avatar-wrapper" style={{ backgroundImage: `url(${require("../assets/avatar-rizky-hasanuddin.webp")})` }}></div>
                <div>
                  <p className="notification-text"><span><a href="/" className="a-name">Rizky Hasanuddin</a></span> sent you a private message <span className={clicked ? "" : ""}></span></p>
                  <p className="notification-text time">5 days ago</p>
                  <a href="/" className="private-message-wrapper">
                    <div className="private-message">
                      Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                      I'm already having lots of fun and improving my game.
                    </div>
                  </a>
                    
                </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 g-2">
          <div className={clicked ? "notification-row read" : "notification-row read"}>
            <div className="notification-row-details">
                <div className="avatar-wrapper" style={{ backgroundImage: `url(${require("../assets/avatar-kimberly-smith.webp")})` }}></div>
                <div>
                  <p className="notification-text"><span><a href="/" className="a-name">Kimberly Smith</a></span> commented on your picture <span className={clicked ? "" : ""}></span></p>
                  <p className="notification-text time">1 week ago</p>
                </div>
                <div className="notification-img-wrapper" style={{ backgroundImage: `url(${require("../assets/image-chess.webp")})` }}></div>
            </div>
          </div>
        </div>

        <div className="row mt-1 g-2">
          <div className={clicked ? "notification-row read" : "notification-row read"}>
            <div className="notification-row-details">
                <div className="avatar-wrapper" style={{ backgroundImage: `url(${require("../assets/avatar-nathan-peterson.webp")})` }}></div>
                <div>
                  <p className="notification-text"><span><a href="/" className="a-name">Nathan Peterson</a></span> reacted to your recent post <a href="/" className="a-noun">5 end-game strategies to increase your win rate</a> <span className={clicked ? "" : ""}></span></p>
                  <p className="notification-text time">2 weeks ago</p>
                </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 g-2">
          <div className={clicked ? "notification-row read" : "notification-row read"}>
            <div className="notification-row-details">
                <div className="avatar-wrapper" style={{ backgroundImage: `url(${require("../assets/avatar-anna-kim.webp")})` }}></div>
                <div>
                  <p className="notification-text"><span><a href="/" className="a-name">Anna Kim</a></span> left the group <a href="/" className="a-noun">Chess Club</a> <span className={clicked ? "" : ""}></span></p>
                  <p className="notification-text time">2 weeks ago</p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Notifications;