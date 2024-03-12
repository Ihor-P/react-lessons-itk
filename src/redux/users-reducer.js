const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [
        // {id: 1, followed: false, fullName: 'Ihor', status: 'Musician, Songwriter, Singer', location: {country: 'USSR', city: 'Gretsovka'},
        //     ava: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ITalkov.jpg/273px-ITalkov.jpg'},
        // {id: 2, followed: true, fullName: 'Hannah', status: 'Singer', location: {country: 'Ukraine', city: 'Drogobych'},
        //     ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ4famt-XstmupyE2MxxkktJskPyRCyrGHQ&usqp=CAU'},
        // {id: 3, followed: false, fullName: 'Elizabeth', status: 'model', location: {country: 'Sweden', city: 'Stockholm'},
        //     ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI76uSgQbcJ2cLXyTV5W0Oz75qS6Ztwok_3Q&usqp=CAU'},
    ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
            return { ...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state;

    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default usersReducer