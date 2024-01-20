import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postData = [
    {id: 1, message: 'Hi, how are you?', likeCounter: 12},
    {id: 2, message: 'It\'s my first post', likeCounter: 18},
    {id: 3, message: 'Yo', likeCounter: 21},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]
const MyPosts = () => {
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
                <Post message={postData[0].message} likeCounter={postData[0].likeCounter}/>
                <Post message={postData[1].message} likeCounter={postData[1].likeCounter}/>
                <Post message={postData[2].message} likeCounter={postData[2].likeCounter}/>
            </div>
        </div>
    );
};

export default MyPosts;
