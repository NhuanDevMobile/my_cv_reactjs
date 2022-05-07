import React from 'react';
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile">
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
          <img
            className="profileCoverImg"
            src="assets/images/cover.jpg"
            alt=""
          />
          <img
            className="profileUserImg"
            src="assets/images/avatar.jpg"
            alt=""
          />
         <div className="profileInfo">
            <h4 className="profileInfoName">Trần Nhuận</h4>
            <span className="profileInfoDesc">Developer</span>
        
        </div>
        </div>
      </div>
      <div className="profileRightBottom">
      </div>
    </div>
  </div>
  )
}
