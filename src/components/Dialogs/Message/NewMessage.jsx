import React from "react";
import styles from "./../Dialogs.module.css";

const NewMessage = (props) => {

    let newMessage = React.createRef()
    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        console.log(e)
        let text = newMessage.current.value
        props.updateNewMessageText(text);
    }

    return (
        // <div className={styles.messages}>
            <div className={styles.newMessage}>
                <textarea
                    onChange={onMessageChange}
                    ref={newMessage}
                    value={props.newMessageText}
                ></textarea>
                <button onClick={ addMessage }>addMessage</button>
            </div>
        // </div>
    )
}
export default NewMessage