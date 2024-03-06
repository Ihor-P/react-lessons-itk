import React from "react";
import styles from './Users.module.css'

const Users = (props) => {

   if (props.users.length === 0) {
       props.setUsers([
               {id: 1, followed: false, fullName: 'Ihor', status: 'Musician, Songwriter, Singer', location: {country: 'USSR', city: 'Gretsovka'},
                   ava: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ITalkov.jpg/273px-ITalkov.jpg'},
               {id: 2, followed: true, fullName: 'Hannah', status: 'Singer', location: {country: 'Ukraine', city: 'Drogobych'},
                   ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ4famt-XstmupyE2MxxkktJskPyRCyrGHQ&usqp=CAU'},
               {id: 3, followed: false, fullName: 'Elizabeth', status: 'model', location: {country: 'Sweden', city: 'Stockholm'},
                   ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI76uSgQbcJ2cLXyTV5W0Oz75qS6Ztwok_3Q&usqp=CAU'},
           ]
       )
   }

    return <div className={styles.users}>
        {
            props.users.map(u => <div key={u.id}>
                <div className={styles.user}>
                <div>
                    <span>
                        <img className={styles.ava} src={u.ava}/>
                    </span>
                    <span>{u.fullName} </span>
                    <span>{u.location.country} </span>
                </div>
                <div>
                    <span>
                        { u.followed
                            ? <button onClick={()=> {props.unfollow(u.id)}}>unfollow</button>
                            : <button onClick={()=> {props.follow(u.id)}}>follow</button>
                        }
                    </span>
                    <span>{u.status} </span>
                    <span>{u.location.city} </span>
                </div>
                </div>
            </div>)
        }
    </div>
}

export default Users