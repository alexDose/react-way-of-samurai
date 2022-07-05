import React from 'react';
import s from "./Profile.module.css"
import {MyPosts, MyPostsType} from "./Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../Redux/State";

type ProfileType = {
    state: ProfilePageType
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} />
        </div>
    )
}
