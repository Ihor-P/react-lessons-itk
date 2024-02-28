import React from "react";
import styles from "./../Dialogs.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = (props) => {

    // let state = props.store.getState().dialogsPage;
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <NewMessage
            updateNewMessageText={onMessageChange}
            addMessage={addMessage}
            newMessageText={props.newMessageText}
            // dialogsPage={state}
        />
    )
}
export default NewMessageContainer