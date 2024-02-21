import React from "react";
import styles from "./../Dialogs.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/store";



const NewMessage = (props) => {

    // let newMessage = React.createRef()
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let textBody = e.target.value
        // let text = newMessage.current.value
        props.dispatch(updateNewMessageTextActionCreator(textBody))
    }

    return (
        // <div className={styles.messages}>
            <div className={styles.newMessage}>
                <textarea
                    onChange={onMessageChange}
                    // ref={newMessage}
                    value={props.newMessageText}
                ></textarea>
                <button onClick={ addMessage }>addMessage</button>
            </div>
        // </div>
    )
}
export default NewMessage