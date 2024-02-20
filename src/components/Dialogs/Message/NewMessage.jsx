import React from "react";
import styles from "./../Dialogs.module.css";

const NewMessage = (props) => {

    let newMessage = React.createRef()
    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onMessageChange = (e) => {
        let text = newMessage.current.value
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
        props.dispatch(action)
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