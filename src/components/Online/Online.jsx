import React from "react";
import styles from "./Online.module.css"
import Friend from "./Friend/Friend"

const Online = (props) => {

    let onlineFriends = props.state.friends
        .filter((f) => f.online)
        .map((f, i) => <Friend
            name={f.firstName}
            id={f.id} ava={f.ava}
            isOnline={f.online}
            key={f.name + i.toString()}
        />)

    return (
        <div className={styles.friends}>
            {onlineFriends}
        </div>
    )
}

export default Online