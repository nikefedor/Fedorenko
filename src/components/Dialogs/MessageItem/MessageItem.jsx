import React from "react"
import c from "./../Dialogs.module.css"

const MessageItem = (props) => {
    return <div className={c.dialog}>{props.message}</div>
}


export default MessageItem;