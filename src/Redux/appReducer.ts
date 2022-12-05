import {ThunkAction} from "redux-thunk";
import {StoreType} from "./reduxStore";
import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

type InitialStateType = typeof initialState

export type InitializedSuccessType = ReturnType<typeof initializedSuccess>

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: InitializedSuccessType): InitialStateType => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
} as const)

export const initializeApp = (): ThunkAction<void, StoreType, unknown, any> => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initializedSuccess())
    })
}