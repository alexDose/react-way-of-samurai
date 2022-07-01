import React from "react";
import {DialogsPropsType} from "../Dialogs/Dialogs";
import {MyPostsType} from "../Profile/Posts/MyPosts";

type RootStateType = {
    profilePage: MyPostsType
    dialogsPage: DialogsPropsType
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
