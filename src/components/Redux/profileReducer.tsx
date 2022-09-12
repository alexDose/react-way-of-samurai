import {ActionsTypes, AddPostActionType, SetUserProfileType, UpdateNewPostTextType} from "./Store";
import {ProfileType} from "../Profile/ProfileContainer";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type PostsType = {
    id: number
    imageAddress: string
    text: string
    like: number
    dislike: number
}

export type InitialStateProfileType = typeof initialState

let initialState = {
    posts: [
        {
            id: 1,
            imageAddress: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
            text: "Hello",
            like: 15,
            dislike: 3
        },
        {
            id: 2,
            imageAddress: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
            text: "I don't know how this working",
            like: 4,
            dislike: 6
        }
    ] as Array<PostsType>,
    newPostText: "hello",
    profile: null as ProfileType | null
}

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionsTypes): InitialStateProfileType => {

    switch (action.type) {

        case ADD_POST:
            let newPost: PostsType = {
                id: 3,
                imageAddress: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png",
                text: state.newPostText,
                like: 0,
                dislike: 0
            }
                return {...state,
                    posts: [...state.posts, newPost],
                    newPostText: ""
                }

        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText: action.newPostText
            }

        case SET_USER_PROFILE:
            return {...state,
                profile: action.profile
            }

        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostActionCreator = (text: string): UpdateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
})
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(res => {
        dispatch(setUserProfile(res.data))
    })
}

