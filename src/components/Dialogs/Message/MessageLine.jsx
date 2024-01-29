import React from "react";
import styles from "./../Dialogs.module.css";

const MessageLine = (props) => {
    return (
        <div className={`${styles.dialog} ${props.alignRight ? styles.right : ''}`}>{props.messageText}</div>
    )
}
export default MessageLine