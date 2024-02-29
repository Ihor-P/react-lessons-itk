import React from "react";
import styles from "./Sidebar.module.css"
import FriendImg from "./FriendImg/FriendImg";
import StoreContext from "../../storeContext";

const Sidebar = (props) => {



    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let onlineFriends3 = store.getState().sidebar.friends
                    .filter((f, i) => f.online)
                    .filter((f, i) => i < 3)
                    .map((f, i) => <FriendImg name={f.firstName} id={f.id} ava={f.ava} isOnline={f.online} key={i+'frindimg'}/>)

                return <div className={styles.friendImgs}>
                    {onlineFriends3}
                </div>
            }
        }
        </StoreContext.Consumer>
    )
}

export default Sidebar