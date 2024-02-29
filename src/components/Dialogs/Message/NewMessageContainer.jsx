import React from "react";
import styles from "./../Dialogs.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import StoreContext from "../../../storeContext";

const NewMessageContainer = (props) => {

    // let state = props.store.getState().dialogsPage;


    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                return <NewMessage
                    updateNewMessageText={onMessageChange}
                    addMessage={addMessage}
                    newMessageText={props.newMessageText}
                    // dialogsPage={state}
                />
            }
            }
        </StoreContext.Consumer>
    )
}
export default NewMessageContainer