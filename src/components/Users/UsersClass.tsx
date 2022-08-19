import React from "react";
import s from "./Users.module.css";
import userPhoto from "../assets/images/user.png";
import axios from "axios";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string
    followed: boolean
}

type UsersType = {
    unfollow: (id: number) => void
    follow: (id: number) => void
    setUsers: (users: any) => void
    users: Array<UserType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.items)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })

    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i < pageCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => <span onClick={(e) => {this.onPageChanged(p)}} className={this.props.currentPage === p ? s.select: ''}>{p}</span>)}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}