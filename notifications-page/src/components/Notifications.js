import React from 'react';

function Notifications() {
  return (
    <div id="notifications">
      <div className="container">
        <div className="row g-1">
          <div className="col col-title">
            <h1 className="title">Notifications <span className="title-number">3</span></h1>
          </div>
          <div className="col col-mark">
            <button type="button" className="mark-btn">Mark all as read</button>
          </div>
        </div>

        <div className="row mt-3 g-2">
          <div className="notification-row unread">
            <div className="notification-row-details">
              {/* <div className=""> */}
                {/* <div className="avatar-wrapper" style={{ backgroundImage: "url(" + 'assets/avatar-mark-webber.webp' + ")" }}> */}
                <div className="avatar-wrapper"></div>
                
                  {/* <img className="avatar" src='../assets/images/avatar-mark-webber.webp'></img> */}
                {/* </div> */}
              {/* </div> */}
              {/* <div className=""> */}
                <div>
                  <p><span>Mark Webber </span>reacted to your recent post</p>
                  <p>1m ago</p>
                </div>
                
              {/* </div> */}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications;