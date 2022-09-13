import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogsPageType} from "../Redux/Store";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
    updateNewMessageBody: (value: string) => void
    sendMessageBody: () => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)

    const onSendMessageBody = () => {
        props.sendMessageBody()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={props.dialogsPage.newMessageBody} placeholder={"enter your message..."}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageBody}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}