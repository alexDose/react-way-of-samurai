import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onChangeHandler = (value: string) => {
                    store.dispatch(updateNewPostActionCreator(value))
                }

                return <MyPosts updateNewPostText={onChangeHandler}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}
