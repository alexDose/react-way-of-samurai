import {SendMessageBodyType, UpdateNewMessageBodyType} from "./Store";

const SEND_MESSAGE_BODY = "SEND_MESSAGE_BODY"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"

export const dialogsReducer = (state: any, action: any) => {
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
export const updateNewMessageBodyActionCreator = (text: string): UpdateNewMessageBodyType => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text})
