import React from "react";
import s from "../Profile.module.css";
import {Post, PostType} from "./Post";
import {Field, reduxForm} from "redux-form";

export type MyPostsType = {
    posts: Array<PostType>
    addPost: (value: any) => void
}

let AddNewPostForm = (props: {handleSubmit: any}) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            New Post
            <Field name="newPostText" component="textarea"/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddMewPostForm"})(AddNewPostForm)

export const MyPosts = (props: MyPostsType) => {

    const onAddPost = (value: any) => {
        props.addPost(value.newPostText)
    }

    return (
        <div>
            My posts
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {props.posts.map(el => <Post key={el.id} imageAddress={el.imageAddress} text={el.text}
                                             dislike={el.dislike} like={el.like}/>)}
            </div>
        </div>
    )
}