import {UserType} from "../Users/UsersContainer";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

type FollowActionType = {
    type: "FOLLOW"
    userId: number
}

type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: number
}

type SetUsersActionType = {
    type: "SET_USERS"
    users: Array<UserType>
}

type SetTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number

}

type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}

type ToggleIsFetchingType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}

type ActionsTypes = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingType

export type InitialStateUsersType = typeof initialState

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: true
}

export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }

        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
