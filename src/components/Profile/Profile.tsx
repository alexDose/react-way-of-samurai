import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, AddPostActionType, ProfilePageType, UpdateNewPostTextType} from "../Redux/Store";
import {MyPostsContainer} from "./Posts/MyPostsContainer";
import {StoreType} from "../Redux/reduxStore";

type ProfileType = {
store: StoreType
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
