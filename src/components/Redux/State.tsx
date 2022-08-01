const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SEND_MESSAGE_BODY = "SEND_MESSAGE_BODY"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"

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
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
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

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | SendMessageBodyType | UpdateNewMessageBodyType

export type AddPostActionType = {
    type: "ADD_POST"
}

export type UpdateNewPostTextType = {
    type: "UPDATE_NEW_POST_TEXT"
    newPostText: string
}

export type SendMessageBodyType = {
    type: "SEND_MESSAGE_BODY"
}

export type UpdateNewMessageBodyType = {
    type: "UPDATE_NEW_MESSAGE_BODY"
    newMessageBody: string
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
            newPostText: "hello"
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
            ],
            newMessageBody: ""
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
        if (action.type === ADD_POST) {
            let newPost: PostsType = {
                id: 3,
                imageAddress: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png",
                text: this._state.profilePage.newPostText,
                like: 0,
                dislike: 0
            };
            if (this._state.profilePage.newPostText) {
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = ""
            }
            this.rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this.rerenderEntireTree()
        } else if (action.type === SEND_MESSAGE_BODY) {
            if (this._state.dialogsPage.newMessageBody) {
                this._state.dialogsPage.messages.push({id: 6, message: this._state.dialogsPage.newMessageBody})
                this._state.dialogsPage.newMessageBody = ""
            }
            this.rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newMessageBody
            this.rerenderEntireTree()
        }
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostActionCreator = (text: string): UpdateNewPostTextType => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export const sendMessageBodyActionCreator = (): SendMessageBodyType => ({type: SEND_MESSAGE_BODY})
export const updateNewMessageBodyActionCreator = (text: string): UpdateNewMessageBodyType => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text})

//@ts-ignore
window.store = store
