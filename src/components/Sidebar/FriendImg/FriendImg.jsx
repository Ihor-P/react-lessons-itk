import React from "react";
import styles from "./../Sidebar.module.css";

const FriendImg = (props) => {
    return (
        <div className={`${styles.friendAva} `}>
            <img
                src={props.ava}
                alt=""
            />
            <div>{props.name}</div>
        </div>
    )
}

export default FriendImg