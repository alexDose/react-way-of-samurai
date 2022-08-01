import {AddPostActionType, PostsType, UpdateNewPostTextType} from "./Store";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 3,
                imageAddress: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png",
                text: state.newPostText,
                like: 0,
                dislike: 0
            }
            if (state.newPostText) {
                state.posts.push(newPost);
                state.newPostText = ""
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostActionCreator = (text: string): UpdateNewPostTextType => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
