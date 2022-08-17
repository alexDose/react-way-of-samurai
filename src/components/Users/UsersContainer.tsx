import {connect} from "react-redux";
import {Users, UserType} from "./UsersClass";
import {StoreType} from "../Redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, InitialStateUsersType, setCurrentPageAC, setUsersAC, unfollowAC} from "../Redux/usersReducer";

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
}

const mapStateToProps = (state: StoreType): InitialStateUsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)