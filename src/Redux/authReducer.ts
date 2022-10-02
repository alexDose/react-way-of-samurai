import {Dispatch} from "redux";
import {authApi} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

type SetUserDataActionType = {
    type: "SET_USER_DATA"
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type InitialStateUsersType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateUsersType = initialState, action: SetUserDataActionType): InitialStateUsersType => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: null | number, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA, userId, email, login, isAuth
})
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.me().then(res => {
        if (res.data.resultCode === 0) {
            let {id, login, email} = res.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authApi.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}
export const logout = () => (dispatch: Dispatch) => {
    authApi.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null,null, null, false))
        }
    })
}