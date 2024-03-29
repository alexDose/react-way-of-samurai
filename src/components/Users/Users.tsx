import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React, {FC} from "react";
import {UserType} from "./UsersContainer";
import preloader from "../../assets/images/Rocket.gif"
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";

type UsersType = {
    totalCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFetching: boolean
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

export const Users: FC<UsersType> = ({totalCount,pageSize, onPageChanged, currentPage, ...props}) => {
/*

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
*/

    return <div>
        <div>
            {props.isFetching && <img src={preloader}/>}
            <Paginator totalItemsCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} portionSize={10}/>
{/*
            {pages.map(p => {
                return <span key={p}
                             onClick={(e) => {props.onPageChanged(p)}}
                             className={props.currentPage === p ? s.select : ''}>{p}</span>
            })}
*/}
        </div>

        <br/>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'profile/' + u.id}>
                            <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
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