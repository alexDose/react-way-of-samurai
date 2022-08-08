import React from "react";
import {
    addPostActionCreator, InitialStateProfileType,
    updateNewPostActionCreator
} from "../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../../Redux/reduxStore";

/*
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
*/

const mapStateToProps = (state: StoreType): InitialStateProfileType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (value: string) => {
            dispatch(updateNewPostActionCreator(value))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
