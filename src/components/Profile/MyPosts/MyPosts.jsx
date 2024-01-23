import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostArray from "../PostArray";

let postsElements = PostArray
    .map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)
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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
