import React from "react";
// import styles from './Users.module.css'
// import axios from "axios";

import styles from "./Users.module.css";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    
    let pages = [];
    for (let i = 1; i <=pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.users}>
        <div className={styles.pageCounter}>

            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={styles.user}>
                    <div>
                    <span>
                        <img className={styles.ava} src={u.photos.small != null ? u.photos.small
                            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ITalkov.jpg/273px-ITalkov.jpg'}/>
                    </span>
                        <span>{u.name} </span>
                        <span>{'u.location.country'} </span>
                    </div>
                    <div>
                    <span>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>
                        }
                    </span>
                        <span>{u.status} </span>
                        <span>{'u.location.city'} </span>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users