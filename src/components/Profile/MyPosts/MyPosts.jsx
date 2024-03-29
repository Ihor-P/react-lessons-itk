import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements =
        props.posts.map((p, i) => <Post message={p.message} likeCounter={p.likeCounter} key={i.toString() + '-post'}/>)

    // let newPostElement = React.createRef()
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        // ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
