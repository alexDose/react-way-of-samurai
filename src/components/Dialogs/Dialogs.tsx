import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {sendMessageBodyActionCreator, updateNewMessageBodyActionCreator} from "../Redux/dialogsReducer";
import {StoreType} from "../Redux/reduxStore";

export type DialogsPropsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.store.getState().dialogsPage.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElements = props.store.getState().dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)

    const onSendMessageBody = () => {
        props.store.dispatch(sendMessageBodyActionCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={props.store.getState().dialogsPage.newMessageBody} placeholder={"enter your message..."}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageBody}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}