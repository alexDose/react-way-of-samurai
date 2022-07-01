import React, {createRef} from "react";
import s from "../Profile.module.css";
import {Post, PostType} from "./Post";

export type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
}

export const MyPosts = (props: MyPostsType) => {

    const ref = createRef()

    const addPost = () => {
        let text;
        props.addPost()
    }

    return (
        <div>
            My posts
            <div>
                New Post
                <textarea></textarea>
                <button onClick={addPost}>send</button>
                <button>remove</button>
            </div>
            <div className={s.posts}>
                {props.posts.map(el => <Post key={el.id} imageAddress={el.imageAddress} text={el.text} dislike={el.dislike} like={el.like}/>)}
            </div>
        </div>
    )
}