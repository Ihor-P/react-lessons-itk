import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     return <Dialogs state={props.store.getState().dialogsPage} dispatch={props.store.dispatch}/>
// }

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

// const mapDispatchToProps = (dispatch) => {
//     dispatch: () => {
//         dispatch()
//     }
// }

const DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer