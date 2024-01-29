import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageLine from "./Message/MessageLine";

const Dialogs = (props) => {

    let dialogsItems = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} ava={d.ava}/>)

    let messagesElements = props.state.messages

        .map(mState => <MessageLine messageText={mState.message} alignRight={mState.isAuthorMe}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs