import React from 'react';
import s from "./Profile.module.css"
import {MyPosts, MyPostsType} from "./Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props: MyPostsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
