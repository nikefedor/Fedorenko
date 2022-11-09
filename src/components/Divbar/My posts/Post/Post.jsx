import React from "react";
import c from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="https://img3.akspic.ru/previews/7/4/2/8/6/168247/168247-kosti_3d-igra_v_kosti_3d-azartnaya_igra-pitevaya_igra-kazino-500x.jpg" />
      {props.message}
      <button>Like</button>
      {props.likesCount}
      
    </div>
  )
}
export default Post;