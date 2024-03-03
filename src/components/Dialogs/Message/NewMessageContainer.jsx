import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = (props) => {
    let onAddMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (textBody) => {
        props.dispatch(updateNewMessageTextActionCreator(textBody))
    }

    return (
            <NewMessage
                updateNewMessageText={onMessageChange}
                addMessage={onAddMessage}
                newMessageText={props.state.newMessageText}
            />
    )
}
export default NewMessageContainer