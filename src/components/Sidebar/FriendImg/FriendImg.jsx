import React from "react";
import styles from "./../Sidebar.module.css";

const FriendImg = (props) => {
    return (
        <div className={`${styles.friendAva} ${props.isOnline ? styles.block : styles.none}`}>
            <img
                src={props.ava}
                alt=""
            />
            <div>{props.name}</div>
        </div>
    )
}

export default FriendImg