import React from "react";
import preloader from "../../../assets/images/Rocket.gif"
import {ProfileType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = (props: {profile: ProfileType | null}) => {
    if (!props.profile) {
        return <img src={preloader}/>
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"Hello"}/>
            </div>
        </div>
    )
}