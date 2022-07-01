import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType ={
    id: number
    message: string
}

export type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElements = props.messages.map(el => <Message key={el.id} message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}