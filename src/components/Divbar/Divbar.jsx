import React from "react";
import c from "./Divbar.module.css"
import Myposts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Divbar = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Myposts postData={props.postPage.postData}
        newPostText={props.postPage.newPostText}
        dispatch={props.dispatch} />
    </div>
  )
}
export default Divbar;