import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageLine from "./Message/MessageLine";
import NewMessage from "./Message/NewMessage";
import NewMessageContainer from "./Message/NewMessageContainer";
import StoreContext from "../../storeContext";

const Dialogs = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let dialogsItems = store.getState().dialogsPage.dialogs
                    .map((d, i) => <DialogItem name={d.name} id={d.id + i.toString()} ava={d.ava} key={d.name + i.toString()}/>)

                let messagesElements = store.getState().dialogsPage.messages
                    .map((mState, i) => <MessageLine
                        messageText={mState.message}
                        alignRight={mState.isAuthorMe}
                        key={i.toString() + '-message'}
                    />)

                return (
                    <div className={styles.dialogs}>
                        <div className={styles.dialogsItems}>
                            {dialogsItems}
                        </div>
                        <div className={styles.messages}>
                            <div>{messagesElements}</div>
                        </div>
                        <div></div>
                        <NewMessageContainer
                            // store={props.store}
                            newMessageText={store.getState().dialogsPage.newMessageText}
                            // dispatch={props.dispatch}
                        />
                    </div>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default Dialogs