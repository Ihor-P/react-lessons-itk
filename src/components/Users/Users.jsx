import React from "react";
import styles from './Users.module.css'
import axios from "axios";

class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     // alert('NEW')
    //
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             //https://jsonviewer.stack.hu/ - json online viewer
    //             //https://social-network.samuraijs.com/docs# - SamuraiJS Social Network API documentation version 1.0.0
    //             .then(response => {
    //                 console.log('what?')
    //                 this.props.setUsers(response.data.items)
    //             })
    //             .catch(function (error) {
    //                 // обработка ошибки
    //                 console.log(error);
    //             })
    //             .finally(function () {
    //                 // выполняется всегда
    //                 console.log('finally')
    //             });
    //
    // }

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            //https://jsonviewer.stack.hu/ - json online viewer
            //https://social-network.samuraijs.com/docs# - SamuraiJS Social Network API documentation version 1.0.0
            .then(response => {
                console.log('what?')
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
            .catch(function (error) {
                // обработка ошибки
                console.log(error);
            })
            .finally(function () {
                // выполняется всегда
                console.log('finally')
            });
    }

    onPageChanged = (pageNumber) => {
        this.props. setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            //https://jsonviewer.stack.hu/ - json online viewer
            //https://social-network.samuraijs.com/docs# - SamuraiJS Social Network API documentation version 1.0.0
            .then(response => {
                console.log('what?')
                this.props.setUsers(response.data.items)
            })
            .catch(function (error) {
                // обработка ошибки
                console.log(error);
            })
            .finally(function () {
                // выполняется всегда
                console.log('finally')
            });
    }

    // getUsers = () => {
    //
    // }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <=pagesCount; i++) {
            pages.push(i);
        }

        return <div className={styles.users}>
            <div className={styles.pageCounter}>

                { pages.map( p=> {
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                })}

                {/*<span>1</span>*/}
                {/*<span>2</span>*/}
                {/*<span>3</span>*/}
                {/*<span>4</span>*/}
                {/*<span>5</span>*/}
            </div>
            {/*<div>*/}
            {/*    <button onClick={this.getUsers}>Get Users</button>*/}
            {/*</div>*/}
            {
                this.props.users.map(u => <div key={u.id}>
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
                                this.props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}


export default Users