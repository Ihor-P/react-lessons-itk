// import React from "react";
// import styles from './Users.module.css'
// import axios from "axios";

// const UsersXXXX = (props) => {
//
//    let getUsers = () => {
//        if (props.users.length === 0) {
//
//            axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                //https://jsonviewer.stack.hu/ - json online viewer
//                //https://social-network.samuraijs.com/docs# - SamuraiJS Social Network API documentation version 1.0.0
//                .then(response => {
//                    console.log('what?')
//                    debugger
//                    props.setUsers(response.data.items)
//                })
//                .catch(function (error) {
//                // обработка ошибки
//                console.log(error);
//                 })
//                .finally(function () {
//                    // выполняется всегда
//                    console.log('finally')
//                });
//        }
//    }

    // return <div className={styles.users}>
    //     <div>
    //         <button onClick={getUsers}>Get Users</button>
    //     </div>
    //     {
    //         props.users.map(u => <div key={u.id}>
    //             <div className={styles.user}>
    //             <div>
    //                 <span>
    //                     <img className={styles.ava} src={u.photos.small != null ? u.photos.small
    //                         : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ITalkov.jpg/273px-ITalkov.jpg'}/>
    //                 </span>
    //                 <span>{u.name} </span>
    //                 <span>{'u.location.country'} </span>
    //             </div>
    //             <div>
    //                 <span>
    //                     { u.followed
    //                         ? <button onClick={()=> {props.unfollow(u.id)}}>unfollow</button>
    //                         : <button onClick={()=> {props.follow(u.id)}}>follow</button>
    //                     }
    //                 </span>
    //                 <span>{u.status} </span>
    //                 <span>{'u.location.city'} </span>
    //             </div>
    //             </div>
    //         </div>)
    //     }
    // </div>
// }

// export default UsersXXXX