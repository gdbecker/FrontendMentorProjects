import React from 'react';

function QRCode() {
  return (
    <div id="qr-code">
      <div className="container">
        <div className="row">
          <div className="qr-box"></div>
        </div>
        <div className="row mt-3">
          <h4 className="code-header">Improve your front-end skills by building projects</h4>
        </div>
        <div className="row mt-1">
          <p className="code-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  )
}

export default QRCode;