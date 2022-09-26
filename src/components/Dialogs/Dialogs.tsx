import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogsPageType} from "../../Redux/Store";
import {Field, reduxForm} from "redux-form";

export type DialogsPropsType = {
    updateNewMessageBody: (value: string) => void
    sendMessageBody: (values: any) => void
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)

    const addNewMessage = (values: any) => {
        props.sendMessageBody(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props: {handleSubmit: any}) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)