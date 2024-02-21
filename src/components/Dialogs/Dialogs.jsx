import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageLine from "./Message/MessageLine";
import NewMessage from "./Message/NewMessage";

const Dialogs = (props) => {

    let dialogsItems = props.dialogsPage.dialogs
        .map((d, i) => <DialogItem name={d.name} id={d.id + i.toString()} ava={d.ava} key={d.name + i.toString()}/>)

    let messagesElements = props.dialogsPage.messages
        .map((mState, i) => <MessageLine
            messageText={mState.message}
            alignRight={mState.isAuthorMe}
            key={i.toString() + '-message'}
        />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
            </div>
            <div></div>
            <NewMessage
                newMessageText={props.dialogsPage.newMessageText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Dialogs