import React from "react";
import s from "../Profile.module.css";
import preloader from "../../../assets/images/Rocket.gif"
import {ProfileType} from "../ProfileContainer";

export const ProfileInfo = (props: {profile: ProfileType | null}) => {
    if (!props.profile) {
        return <img src={preloader}/>
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )
}