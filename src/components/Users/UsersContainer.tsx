import {connect} from "react-redux";
import {Users, UserType} from "./UsersClass";
import {StoreType} from "../Redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, InitialStateUsersType, setUsersAC, unfollowAC} from "../Redux/usersReducer";

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: StoreType): InitialStateUsersType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)