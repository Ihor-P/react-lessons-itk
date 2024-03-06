import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";


// const NewMessageContainer = (props) => {
//     let onAddMessage = () => {
//         props.dispatch(addMessageActionCreator());
//     }
//
//     let onMessageChange = (textBody) => {
//         props.dispatch(updateNewMessageTextActionCreator(textBody))
//     }
//
//     return (
//             <NewMessage
//                 updateNewMessageText={onMessageChange}
//                 addMessage={onAddMessage}
//                 newMessageText={props.state.newMessageText}
//             />
//     )
// }

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (textBody) => {
            dispatch(updateNewMessageTextActionCreator(textBody))
        }
    }
}


const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);
export default NewMessageContainer