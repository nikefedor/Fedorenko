import React from "react"
import c from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogElements = props.dialogsAndMessages.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id} />)

    let messageElements = props.dialogsAndMessages.messages
        .map(m => <MessageItem message={m.message} />)


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>

            <div className={c.messages}>
                {messageElements}
            </div>
        </div>

    )
}
export default Dialogs;