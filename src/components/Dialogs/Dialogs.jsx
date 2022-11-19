import React from "react"
import c from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsPage-reducer";

const Dialogs = (props) => {

    let State = props.store.getState().dialogsPage;

    let dialogElements = State.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id} />)
    let messageElements = State.messages
        .map(m => <MessageItem message={m.message} />)
    let newMessageBody = State.newMessageBody

     let onSendMessageClick = () => {
           props.store.dispatch(sendMessageCreator());
        }
     let onNewMessageChange = (e) => {
            let body = e.target.value;
            props.store.dispatch(updateNewMessageBodyCreator(body))
        }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>

            <div className={c.messages}>
                <div>{messageElements}</div>
                <div>
                 <textarea value={newMessageBody}
                 onChange={onNewMessageChange}
                 placeholder= 'Enter your name'></textarea></div>
                <div><button onClick = {onSendMessageClick}>Send</button> </div>
            </div>
        </div>

    )
}
export default Dialogs;