const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounter: 12},
        {id: 2, message: 'It\'s my first post', likeCounter: 18},
        {id: 3, message: 'Yo', likeCounter: 21},
        {id: 3, message: 'erwrwer', likeCounter: 34},
        {id: 3, message: 'hhhaa', likeCounter: 2423},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likeCounter: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export default profileReducer