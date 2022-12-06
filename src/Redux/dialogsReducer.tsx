import {v1} from "uuid";

const SEND_MESSAGE_BODY = "SEND_MESSAGE_BODY"

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string
    message: string
}

export type ActionDialogsType = ReturnType<typeof sendMessageBodyActionCreator>

export type InitialStateDialogsType = typeof initialState

let initialState = {
    dialogs: [
        {id: v1(), name: "Anrei"},
        {id: v1(), name: "Anna"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Denis"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Dmitry"}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: "Hello"},
        {id: v1(), message: "Hey"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "I goooooood"},
        {id: v1(), message: "I am learn react"},
    ] as Array<MessagesType>
}

export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionDialogsType): InitialStateDialogsType => {

    switch (action.type) {
        case SEND_MESSAGE_BODY:
            return {...state,
                messages: [...state.messages, {id: v1(), message: action.newMessageBody}]
            }

        default:
            return state
    }
}

export const sendMessageBodyActionCreator = (newMessageBody: string) => ({type: SEND_MESSAGE_BODY, newMessageBody})
