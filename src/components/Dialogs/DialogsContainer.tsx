import React from "react";
import {sendMessageBodyActionCreator, updateNewMessageBodyActionCreator} from "../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const onSendMessageBody = () => {
                        store.dispatch(sendMessageBodyActionCreator())
                    }

                    const onNewMessageChange = (value: string) => {
                        store.dispatch(updateNewMessageBodyActionCreator(value))
                    }

                    return <Dialogs updateNewMessageBody={onNewMessageChange}
                                    sendMessageBody={onSendMessageBody}
                                    newMessageBody={store.getState().dialogsPage.newMessageBody}
                                    dialogsPage={store.getState().dialogsPage}/>
                }
            }
        </StoreContext.Consumer>
    )
}