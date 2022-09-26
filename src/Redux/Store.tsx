import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {ProfileType} from "../components/Profile/ProfileContainer";

type PostsType = {
    id: number
    imageAddress: string
    text: string
    like: number
    dislike: number
}

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    status: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    subscribe: (callback: () => void) => void
    rerenderEntireTree: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType | SendMessageBodyType | UpdateNewMessageBodyType | SetUserProfileType | SetStatusType

export type AddPostActionType = {
    type: "ADD_POST"
    newPostText: string
}

export type SendMessageBodyType = {
    type: "SEND_MESSAGE_BODY"
    newMessageBody: string
}

export type UpdateNewMessageBodyType = {
    type: "UPDATE_NEW_MESSAGE_BODY"
    newMessageBody: string
}

export type SetUserProfileType = {
    type: "SET_USER_PROFILE"
    profile: ProfileType | null
}

export type SetStatusType = {
    type: "SET_STATUS"
    status: string
}

export let store: StoreType = {
    _state: {
        profilePage: {
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
            ],
            profile: null as ProfileType | null,
            status: ""
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Anrei"},
                {id: 2, name: "Anna"},
                {id: 3, name: "Valera"},
                {id: 4, name: "Denis"},
                {id: 5, name: "Sveta"},
                {id: 6, name: "Dmitry"}
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Hey"},
                {id: 3, message: "How are you?"},
                {id: 4, message: "I goooooood"},
                {id: 5, message: "I am learn react"},
            ]
        }
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {
    console.log("State changed")
    },
    subscribe(callback) {
        this.rerenderEntireTree = callback
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this.rerenderEntireTree()
    }
}

/*//@ts-ignore
window.store = store*/
