import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {sendMessageBodyActionCreator, updateNewMessageBodyActionCreator} from "../Redux/dialogsReducer";
import {StoreType} from "../Redux/reduxStore";
import {Dialogs} from "./Dialogs";

export type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const onSendMessageBody = () => {
        props.store.dispatch(sendMessageBodyActionCreator())
    }

    const onNewMessageChange = (value: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(value))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessageBody={onSendMessageBody} newMessageBody={props.store.getState().dialogsPage.newMessageBody} dialogsPage={props.store.getState().dialogsPage}/>
}