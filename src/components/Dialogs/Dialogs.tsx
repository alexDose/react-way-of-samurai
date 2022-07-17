import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogsPageType} from "../Redux/State";

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType ={
    id: number
    message: string
}

export type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElements = props.state.messages.map(el => <Message key={el.id} message={el.message}/>)

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