import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageLine from "./Message/MessageLine";

const Dialogs = (props) => {

    let dialogsItems = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} ava={d.ava}/>)

    let messagesElements = props.state.messages

        .map(mState => <MessageLine messageText={mState.message} alignRight={mState.isAuthorMe}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs