import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/postPage-reducer";
import c from "./Myposts.module.css"
import Post from "./Post/Post";



const Myposts = (props) => {

  let postElements = props.postData
    .map (p=> <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
      props.dispatch(addPostActionCreator());
    
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
      
    }

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange ={ onPostChange } ref = {newPostElement}
          value = {props.newPostText}/>
        </div>
        <div>
          <button onClick = { addPost }>Add post</button>

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