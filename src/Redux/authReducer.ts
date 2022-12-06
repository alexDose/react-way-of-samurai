import {Dispatch} from "redux";
import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./reduxStore";

const SET_USER_DATA = "auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS"

type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type GetCaptchaUrlType = ReturnType<typeof getCaptchaUrlSuccess>

export type AuthActionType = SetUserDataActionType | GetCaptchaUrlType

export type InitialStateUsersType = {
    userId: string | undefined
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}

let initialState = {
    userId: undefined,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: InitialStateUsersType = initialState, action: AuthActionType): InitialStateUsersType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth,
                captchaUrl: action.captchaUrl
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: undefined | string, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null) => ({
    type: SET_USER_DATA, userId, email, login, isAuth, captchaUrl
} as const)
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS, captchaUrl
} as const)

export const getAuthUserData = () => async (dispatch: Dispatch<SetUserDataActionType>) => {
    let res = await authApi.me()
    if (res.data.resultCode === 0) {
        let {id, login, email, captchaUrl} = res.data.data
        dispatch(setAuthUserData(id, email, login, true, captchaUrl))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StoreType, unknown, any> => async (dispatch) => {
    let res = await authApi.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const getCaptchaUrl = (): ThunkAction<void, StoreType, unknown, any> => async (dispatch) => {
    let res = await securityApi.getCaptchaUrl()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logout = () => async (dispatch: Dispatch<SetUserDataActionType>) => {
    let res = await authApi.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(undefined, null, null, false, null))
    }
}