import React from "react";
import styles from "./../Online.module.css";

const Friend = (props) => {
    return (
        <div className={`${props.isOnline ? styles.block : styles.none}`}>
            <img
                src={props.ava}
                alt=""
            />
            <span>{props.name}</span>
        </div>
    )
}

export default Friend