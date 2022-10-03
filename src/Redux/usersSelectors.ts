import {StoreType} from "./reduxStore";

export const getUsers = (state: StoreType) => {
    return state.usersPage.users
}
export const getPageSize = (state: StoreType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: StoreType) => {
    return state.usersPage.currentPage
}
export const getTotalCount = (state: StoreType) => {
    return state.usersPage.totalCount
}
export const getIsFetching = (state: StoreType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: StoreType) => {
    return state.usersPage.followingInProgress
}