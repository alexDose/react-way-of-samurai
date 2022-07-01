import s from "../Profile.module.css";
import React from "react";

export type PostType = {
    id?: number
    imageAddress: string
    text: string
    like: number
    dislike: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img className={s.ava} src={props.imageAddress}/>
            <i>{props.text}</i>
            <div className={s.likeDislike}>
                <img className={s.imageLike} src="https://cdn-icons-png.flaticon.com/128/126/126473.png"/>
                {props.like}
            </div>
            <div className={s.likeDislike}>
                <img className={s.imageLike} src="https://cdn-icons-png.flaticon.com/128/126/126504.png"/>
                {props.dislike}
            </div>
        </div>
    )
}