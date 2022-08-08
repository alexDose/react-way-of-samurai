import React from "react";
import {
    InitialStateDialogsType,
    sendMessageBodyActionCreator,
    updateNewMessageBodyActionCreator
} from "../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../Redux/reduxStore";

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
                                    dialogsPage={store.getState().dialogsPage}/>
                }
            }
        </StoreContext.Consumer>
    )
}*/

type MapStatePropsType = {
    dialogsPage: InitialStateDialogsType
}

const mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
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
