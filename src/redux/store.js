import dialogsPageReducer from "./dialogsPage-reducer";
import postPageReducer from "./postPage-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const SEND_MESSAGE = 'SEND_MESSAGE';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'


let store = {
  _State: {

    postPage: {
      postData: [
        { id: 1, message: 'Hi, how are you?'+' ', likesCount: 13 },
        { id: 2, message: 'It`s my first post'+' ', likesCount: 9 },
      ],
      newPostText: 'fedorenko.com'
      
    },
    dialogsPage: {
  
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Yarik' },
        { id: 3, name: 'Tarik' },
        { id: 4, name: 'Jenya' },
        { id: 5, name: 'Julia' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Where are you from?' },
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _rerenderEntireTree () {
  },

  subscribe (observer) {
    this._rerenderEntireTree = observer;
  },

  getState() {
    return this._State
  },

  dispatch(action) {

    this._State.postPage = postPageReducer (this._State.postPage, action)
    this._State.dialogsPage = dialogsPageReducer (this._State.dialogsPage, action)
    this._State.sidebar = sidebarReducer (this._State.sidebar, action)


    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 5,
    //     message: this._State.postPage.newPostText +' ',
    //     likesCount: 0
    //   };
    //   this._State.postPage.postData.push(newPost);
    //   this._State.postPage.newPostText = '';
    //   this._rerenderEntireTree(this._State);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._State.postPage.newPostText = action.newText;
    // this._rerenderEntireTree (this._State);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._State.dialogsPage.newMessageBody = action.body;
    //   this._rerenderEntireTree(this._State);
    // } else if (action.type === SEND_MESSAGE) {
    //   let body = this._State.dialogsPage.newMessageBody;
    //   this._State.dialogsPage.newMessageBody = '';
    //   this._State.dialogsPage.messages.push({ id: 4, message: body});
      this._rerenderEntireTree(this._State);
    }
  }



// export const addPostActionCreator = () => ({ type: ADD_POST})
// export const updateNewPostTextActionCreator = (text) =>
//  ({ type: UPDATE_NEW_POST_TEXT, newText: text})

// export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
// export const updateNewMessageBodyCreator = (body) => {
//   return { type: UPDATE_NEW_MESSAGE_BODY, body: body}
// }



export default store;