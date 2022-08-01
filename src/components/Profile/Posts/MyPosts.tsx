import React, {ChangeEvent} from "react";
import s from "../Profile.module.css";
import {Post, PostType} from "./Post";
import {AddPostActionType, UpdateNewPostTextType} from "../../Redux/State";

export type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostTextType) => void
}

export const MyPosts = (props: MyPostsType) => {

    const addPost = () => {
        //props.addPost(props.newPostText)
        props.dispatch({type: "ADD_POST"})
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateNewPostText(e.currentTarget.value)
        props.dispatch({type: "UPDATE_NEW_POST_TEXT", newPostText: e.currentTarget.value})
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
