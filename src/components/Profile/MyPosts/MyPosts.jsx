import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCounter: 12},
        {id: 2, message: 'It\'s my first post', likeCounter: 18},
        {id: 3, message: 'Yo', likeCounter: 21},
        {id: 3, message: 'erwrwer', likeCounter: 34},
        {id: 3, message: 'hhhaa', likeCounter: 2423},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let postsElements = posts
        .map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
