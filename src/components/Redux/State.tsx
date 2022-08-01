
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
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    subscribe: (callback: () => void) => void
    rerenderEntireTree: () => void
    getState: () => RootStateType
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
            ]
        }
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {
    console.log("State changed")
    },
    addPost() {
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
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this.rerenderEntireTree()
    },
    subscribe(callback) {
        this.rerenderEntireTree = callback
    }
}

//@ts-ignore
window.store = store
