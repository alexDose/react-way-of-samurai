import s from "./Users.module.css";
import userPhoto from "../assets/images/user.png";
import React from "react";
import {UserType} from "./UsersContainer";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => <span key={p} onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.select : ''}>{p}</span>)}
        </div>

        <br/>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                </span>
            </div>)
        }
    </div>
}