import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../Redux/State";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: (newPostMessage: string) => void
    updateNewPostText: (newPostText: string) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
