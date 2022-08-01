import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, ProfilePageType, UpdateNewPostTextType} from "../Redux/State";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostTextType) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}
