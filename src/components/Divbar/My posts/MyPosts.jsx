import React from "react";
import c from "./Myposts.module.css"
import Post from "./Post/Post";

const Myposts = (props) => {

  let postElements = props.postData
    .map (p=><Post message={p.message} likesCount={p.likesCount} />)

  return (
    
    <div className={c.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>

          <button>Remove</button>
        </div>
      </div>

      <div className={c.posts}>
        {postElements}      
      </div>
    </div>

  )

}
export default Myposts;