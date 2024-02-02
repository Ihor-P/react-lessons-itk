import React from "react";
import styles from "./../Dialogs.module.css";

const NewMessage = () => {

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value
        alert(text)
    }

    return (
        // <div className={styles.messages}>
            <div className={styles.newMessage}>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>addMessage
                </button>
            </div>
        // </div>
    )
}
export default NewMessage