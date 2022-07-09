import React, {createRef, LegacyRef, RefObject, useRef} from "react";
import s from "../Profile.module.css";
import {Post, PostType} from "./Post";

export type MyPostsType = {
    posts: Array<PostType>
    //addPost: (newPostMessage: string) => void
}

export const MyPosts = (props: MyPostsType) => {

    const newPostElements = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        // if(newPostElements.current) {
            let text = newPostElements.current?.value
            //props.addPost()
        // }
    }

    return (
        <div>
            My posts
            <div>
                New Post
                <textarea ref={newPostElements}></textarea>
                <button onClick={addPost}>send</button>
                <button>remove</button>
            </div>
            <div className={s.posts}>
                {props.posts.map(el => <Post key={el.id} imageAddress={el.imageAddress} text={el.text} dislike={el.dislike} like={el.like}/>)}
            </div>
        </div>
    )
}