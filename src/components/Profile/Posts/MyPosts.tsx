import React, {ChangeEvent} from "react";
import s from "../Profile.module.css";
import {Post, PostType} from "./Post";

export type MyPostsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
    updateNewPostText: (newPostText: string) => void
    newPostText: string
}

export const MyPosts = (props: MyPostsType) => {

    const addPost = () => {
        props.addPost(props.newPostText)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            My posts
            <div>
                New Post
                <textarea value={props.newPostText} onChange={onChangeHandler}></textarea>
                <button onClick={addPost}>send</button>
            </div>
            <div className={s.posts}>
                {props.posts.map(el => <Post key={el.id} imageAddress={el.imageAddress} text={el.text}
                                             dislike={el.dislike} like={el.like}/>)}
            </div>
        </div>
    )
}
