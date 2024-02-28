import React from "react";
import styles from "./../Dialogs.module.css";

const NewMessage = (props) => {
    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let textBody = e.target.value
        props.updateNewMessageText(textBody)
    }

    return (
        <div className={styles.newMessage}>
            <textarea
                onChange={onMessageChange}
                value={props.newMessageText}
            >
            </textarea>
            <button onClick={addMessage}>addMessage</button>
        </div>
    )
}
export default NewMessage