const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you?' + ' ', likesCount: 13 },
        { id: 2, message: 'It`s my first post' + ' ', likesCount: 9 },
    ],
    newPostText: 'fedorenko.com'

}


const postPageReducer = (State = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: State.newPostText + ' ',
                likesCount: 0
            };
            State.postData.push(newPost);
            State.newPostText = '';
            return State;
        case UPDATE_NEW_POST_TEXT:
            State.newPostText = action.newText;
            return State;
        default:
            return State;
    }


    // if (action.type === ADD_POST) {
    //     let newPost = {
    //       id: 5,
    //       message: State.newPostText +' ',
    //       likesCount: 0
    //     };
    //     State.postData.push(newPost);
    //     State.newPostText = '';

    //   } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     State.newPostText = action.newText;

    //   } 

    // return State;
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default postPageReducer;