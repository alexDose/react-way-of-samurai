const SEND_MESSAGE_BODY = "SEND_MESSAGE_BODY"

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ActionDialogsType = ReturnType<typeof sendMessageBodyActionCreator>

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
    ] as Array<MessagesType>
}

export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionDialogsType): InitialStateDialogsType => {

    switch (action.type) {
        case SEND_MESSAGE_BODY:
            return {...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }

        default:
            return state
    }
}

export const sendMessageBodyActionCreator = (newMessageBody: string) => ({type: SEND_MESSAGE_BODY, newMessageBody})
