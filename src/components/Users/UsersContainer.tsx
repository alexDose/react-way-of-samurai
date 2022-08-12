import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../Redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, InitialStateUsersType, setUsersAC, unfollowAC} from "../Redux/usersReducer";

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)