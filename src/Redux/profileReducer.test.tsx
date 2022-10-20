import React from 'react'
import {addPostActionCreator, deletePost, PostsType, profileReducer} from "./profileReducer";
import {ProfileType} from "../components/Profile/ProfileContainer";

let state = {
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

test('length og posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com')
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})
test('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com')
    const newState = profileReducer(state, action)
    expect(newState.posts[0].text).toBe('it-kamasutra.com')
})
test('after deleted length of message should be decrement', () => {
    let action = deletePost(1)
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})
test(`after deleted length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(100)
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})

