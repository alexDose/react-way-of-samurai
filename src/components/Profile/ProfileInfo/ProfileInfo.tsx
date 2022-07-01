import React from "react";
import s from "../Profile.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.avatar}
                     src="https://img.favpng.com/23/4/11/computer-icons-user-profile-avatar-png-favpng-QsYtjsW73M0aGLb4GbMEyLbc5.jpg"/>
            </div>
            <div>
                ava+description
            </div>
        </div>
    )
}