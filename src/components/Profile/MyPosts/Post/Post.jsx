import React from "react";
import p from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={p.item}>
            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8fe106ad-faf3-494f-b542-fe687bee5d8d/ddrzpun-faf6d6c4-61de-4505-926a-4a8d08c10612.jpg/v1/fill/w_400,h_289,q_75,strp/mel_gibson_braveheart__by_billyboyuk_ddrzpun-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjg5IiwicGF0aCI6IlwvZlwvOGZlMTA2YWQtZmFmMy00OTRmLWI1NDItZmU2ODdiZWU1ZDhkXC9kZHJ6cHVuLWZhZjZkNmM0LTYxZGUtNDUwNS05MjZhLTRhOGQwOGMxMDYxMi5qcGciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mPKuXnNVwkKkWf1aMfhH7bsP88lklyMl9j6Jco-fUm0"
                alt=""
            />
            <span> {props.message}</span>
            <div>
                <span>Like's</span>
                <span> {props.likeCounter} </span>
            </div>
        </div>
    );
};

export default Post;
