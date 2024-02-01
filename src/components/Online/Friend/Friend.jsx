import React from "react";
import styles from "./../Online.module.css";

const Friend = (props) => {
    return (
        <div className={styles.friend}>
            <img
                src={props.ava}
                alt=""
            />
            <span>{props.name}</span>
        </div>
    )
}

export default Friend