import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../Redux/reduxStore";

export type MyPostsContainerType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerType) => {

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onChangeHandler = (value: string) => {
        props.store.dispatch(updateNewPostActionCreator(value))
    }

    return <MyPosts updateNewPostText={onChangeHandler} addPost={addPost} posts={props.store.getState().profilePage.posts} newPostText={props.store.getState().profilePage.newPostText}/>
}
