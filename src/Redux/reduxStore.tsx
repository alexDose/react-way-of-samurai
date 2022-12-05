import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionsProfileTypes, profileReducer} from "./profileReducer";
import {ActionDialogsType, dialogsReducer} from "./dialogsReducer";
import {ActionsUsersTypes, usersReducer} from "./usersReducer";
import {authReducer, SetUserDataActionType} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer, InitializedSuccessType} from "./appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type StoreType = ReturnType<typeof rootReducer>;

export type RootActionsType = InitializedSuccessType
    | SetUserDataActionType
    | ActionDialogsType
    | ActionsProfileTypes
    | ActionsUsersTypes

export type ThunkType = ThunkAction<void, StoreType, unknown, RootActionsType>

//@ts-ignore
window.store = store