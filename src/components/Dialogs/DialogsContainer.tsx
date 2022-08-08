import React from "react";
import {sendMessageBodyActionCreator, updateNewMessageBodyActionCreator} from "../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../Redux/Store";

/*export const DialogsContainer = () => {

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
}*/

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (value: string) => {
            dispatch(updateNewMessageBodyActionCreator(value))
        },
        sendMessageBody: () => {
            dispatch(sendMessageBodyActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
