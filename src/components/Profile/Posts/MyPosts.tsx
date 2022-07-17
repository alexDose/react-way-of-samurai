import React, {createRef, LegacyRef, RefObject, useRef} from "react";
import s from "../Profile.module.css";
import {Post, PostType} from "./Post";

export type MyPostsType = {
    posts: Array<PostType>
    addPost: (newPostMessage: string) => void
}

export const MyPosts = (props: MyPostsType) => {

    const newPostElements = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElements.current) {
            props.addPost(newPostElements.current.value)
        }
    }

    return (
        <div>
            My posts
            <div>
                New Post
                <textarea ref={newPostElements}></textarea>
                <button onClick={addPost}>send</button>
            </div>
            <div className={s.posts}>
                {props.posts.map(el => <Post key={el.id} imageAddress={el.imageAddress} text={el.text}
                                             dislike={el.dislike} like={el.like}/>)}
            </div>
        </div>
    )
}