import userPhoto from "../assets/images/user.png"
import s from "./Users.module.css"
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
}

export const UsersDelete = (props: UsersType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
    }

/*        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                followed: true,
                fullName: "Sasha",
                status: "I am a boss too",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                followed: false,
                fullName: "Andrew",
                status: "I am a boss too",
                location: {city: "Kiev", country: "Ukraine"}
            }
        ])*/
    }
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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