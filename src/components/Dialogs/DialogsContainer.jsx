import React from "react";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    return <Dialogs state={props.store.getState().dialogsPage} dispatch={props.store.dispatch}/>
}

export default DialogsContainer