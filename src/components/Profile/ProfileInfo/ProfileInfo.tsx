import React from "react";
import preloader from "../../../assets/images/Rocket.gif"
import {ProfileType} from "../ProfileContainer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import s from "../Profile.module.css"

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <img src={preloader}/>
    }
    return (
        <div>
            <div>
                <img className={s.mainPhoto} src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}