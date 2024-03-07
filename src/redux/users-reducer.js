const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {id: 1, followed: false, fullName: 'Ihor', status: 'Musician, Songwriter, Singer', location: {country: 'USSR', city: 'Gretsovka'},
        //     ava: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ITalkov.jpg/273px-ITalkov.jpg'},
        // {id: 2, followed: true, fullName: 'Hannah', status: 'Singer', location: {country: 'Ukraine', city: 'Drogobych'},
        //     ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ4famt-XstmupyE2MxxkktJskPyRCyrGHQ&usqp=CAU'},
        // {id: 3, followed: false, fullName: 'Elizabeth', status: 'model', location: {country: 'Sweden', city: 'Stockholm'},
        //     ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI76uSgQbcJ2cLXyTV5W0Oz75qS6Ztwok_3Q&usqp=CAU'},
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;

    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer