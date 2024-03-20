import React from "react";
import axios from "axios";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    
    let pages = [];
    for (let i = 1; i <=pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.users}>
        <div className={styles.pageCounter}>

            {pages.map((p) => {
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
                        <NavLink to={'profile/' + u.id}>
                            <img className={styles.ava} src={u.photos.small != null ? u.photos.small
                            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ITalkov.jpg/273px-ITalkov.jpg'}
                                 alt='User Ava'/>
                        </NavLink>
                    </span>
                        <span>{u.name} </span>
                        <span>{'u.location.country'} </span>
                    </div>
                    <div>
                    <span>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https:social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "APi-KEY": "5977f966-317d-44bc-bc9a-5571b905b1ca"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })

                            }}>unfollow</button>
                            : <button onClick={() => {

                                // axios.post(`https:social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                //     withCredentials: true,
                                //     headers: {
                                //         "APi-KEY": "5977f966-317d-44bc-bc9a-5571b905b1ca"
                                //     }
                                // })
                                    usersAPI.postFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

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