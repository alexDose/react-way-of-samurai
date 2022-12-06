import React from "react";
import s from "../Profile.module.css";
import {Post, PostType} from "./Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type MyPostsType = {
    posts: Array<PostType>
    addPost: (value: any) => void
}

const maxLength10 = maxLengthCreator(10)


let AddNewPostForm = React.memo((props: { handleSubmit: any }) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            New Post
            <Field name="newPostText" component={Textarea} validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
})

let AddNewPostFormRedux = reduxForm({form: "ProfileAddMewPostForm"})(AddNewPostForm)

export const MyPosts = React.memo((props: MyPostsType) => {

    const postsElements = props.posts.map(el => <Post key={el.id} imageAddress={el.imageAddress} text={el.text} dislike={el.dislike} like={el.like}/>)

    const onAddPost = (value: any) => {
        props.addPost(value.newPostText)
    }

    return (
        <div>
            My posts
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})