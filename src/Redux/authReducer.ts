import {Dispatch} from "redux";
import {authApi} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

type SetUserDataActionType = {
    type: "SET_USER_DATA"
    userId: number
    email: string
    login: string
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
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): SetUserDataActionType => ({
    type: SET_USER_DATA, userId, email, login
})
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.me().then(res => {
        if (res.data.resultCode === 0) {
            let {id, login, email} = res.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}