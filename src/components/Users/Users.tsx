import {UserType} from "../Redux/usersReducer";
import userPhoto from "../assets/images/user.png"
import s from "./Users.module.css"

type UsersType = {
    unfollow: (id: number) => void
    follow: (id: number) => void
    setUsers: (users: any) => void
    users: Array<UserType>
}

export const Users = (props: UsersType) => {
    if (props.users.length === 0) {
        props.setUsers([
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
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}