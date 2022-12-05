import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./reduxStore";

const SET_USER_DATA = "auth/SET_USER_DATA"

export type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    userId: string | undefined
    email: string | null
    login: string | null
    isAuth: boolean
}

export type InitialStateUsersType = {
    userId: string | undefined
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState = {
    userId: undefined,
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

export const setAuthUserData = (userId: undefined | string, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA, userId, email, login, isAuth
})

export const getAuthUserData = () => async (dispatch: Dispatch<SetUserDataActionType>) => {
    let res = await authApi.me()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StoreType, unknown, any> => async (dispatch) => {
    let res = await authApi.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch: Dispatch<SetUserDataActionType>) => {
    let res = await authApi.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(undefined, null, null, false))
    }
}