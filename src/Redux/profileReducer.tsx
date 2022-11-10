import {ActionsTypes, AddPostActionType, SetUserProfileType} from "./Store";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO = "SAVE_PHOTO"

export type PostsType = {
    id: number
    imageAddress: string
    text: string
    like: number
    dislike: number
}

type ActionsProfileTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

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
    profile: null as ProfileType | null,
    status: ""
}

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionsProfileTypes): InitialStateProfileType => {

    switch (action.type) {

        case ADD_POST:
            let newPost: PostsType = {
                id: 3,
                imageAddress: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png",
                text: action.newPostText,
                like: 0,
                dislike: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(el => el.id !== action.id)}
        case SAVE_PHOTO:
            if (state.profile) {
                return {...state, profile: {...state.profile, photos: action.photo}}
            }
            return state

        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (id: number) => ({type: DELETE_POST, id} as const)
export const savePhotoSuccess = (photo: any) => ({type: SAVE_PHOTO, photo} as const)

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let res = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    let res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}

