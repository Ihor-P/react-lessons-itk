import React from "react";
import Online from "./Online";

const OnlineContainer = (props) => {
    return <Online state={props.store.getState().sidebar.friends}/>
}

export default OnlineContainer