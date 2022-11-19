const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
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
};


const dialogsPageReducer = (State = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            State.newMessageBody = action.body;
            return State;
        case SEND_MESSAGE:
            let body = State.newMessageBody;
            State.newMessageBody = '';
            State.messages.push({ id: 4, message: body });
            return State;
        default:
            return State;
    }

    //   if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //    State.newMessageBody = action.body;

    //   } else if (action.type === SEND_MESSAGE) {
    //     let body = State.newMessageBody;
    //     State.newMessageBody = '';
    //     State.messages.push({ id: 4, message: body});

    //   }
    // return State;
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

export default dialogsPageReducer;