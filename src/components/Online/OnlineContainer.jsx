import Online from "./Online";
import {connect} from "react-redux";

// const OnlineContainer = (props) => {
//     return <Online state={props.store.getState().online.friends}/>
// }

const mapStateToProps = (state) => {
    return {
        state: state.online.friends
    }
}

const OnlineContainer = connect(mapStateToProps)(Online)

export default OnlineContainer