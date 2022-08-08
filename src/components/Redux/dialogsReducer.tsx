import {ActionsTypes, SendMessageBodyType, UpdateNewMessageBodyType} from "./Store";

const SEND_MESSAGE_BODY = "SEND_MESSAGE_BODY"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type InitialStateDialogsType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: "Anrei"},
        {id: 2, name: "Anna"},
        {id: 3, name: "Valera"},
        {id: 4, name: "Denis"},
        {id: 5, name: "Sveta"},
        {id: 6, name: "Dmitry"}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hey"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "I goooooood"},
        {id: 5, message: "I am learn react"},
    ] as Array<MessagesType>,
    newMessageBody: ""
}

export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionsTypes): InitialStateDialogsType => {
    switch (action.type) {
        case SEND_MESSAGE_BODY:
            if (state.newMessageBody) {
                state.messages.push({id: 6, message: state.newMessageBody})
                state.newMessageBody = ""
            }
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody
            return state
        default:
            return state
    }
}

export const sendMessageBodyActionCreator = (): SendMessageBodyType => ({type: SEND_MESSAGE_BODY})
export const updateNewMessageBodyActionCreator = (text: string): UpdateNewMessageBodyType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody: text
})
