import React from "react";
import c from "./Divbar.module.css"
import Myposts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Divbar = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Myposts postData={props.post.postData} />
    </div>
  )
}
export default Divbar;