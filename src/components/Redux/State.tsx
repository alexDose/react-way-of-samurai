import React from "react";

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

type ProfilePageType = {
    posts: Array<PostsType>
}

type DialogsPageType = {
    dialogs:  Array<DialogsType>
    messages: Array<MessagesType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
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
        ]
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
}

export const addPost = (newPostMessage: string) => {
    let newPost = {
        id: 3,
        imageAddress: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png",
        text: newPostMessage,
        like: 0,
        dislike: 0
    };
    state.profilePage.posts.push(newPost);
}