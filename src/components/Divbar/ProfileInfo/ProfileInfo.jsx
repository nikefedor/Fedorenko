import React from "react";
import c from "./ProfileInfo.module.css"


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.w3schools.com/w3css/img_lights.jpg"></img>
      </div>
      <div className={c.descriptionBlock}>
        Google + description
      </div>
    </div>
  )
}
export default ProfileInfo;