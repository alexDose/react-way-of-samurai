import React from "react";
import {
    InitialStateDialogsType,
    sendMessageBodyActionCreator,
    updateNewMessageBodyActionCreator
} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {StoreType} from "../../Redux/reduxStore";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

type MapDispatchPropsType = {
    updateNewMessageBody: (value: string) => void
    sendMessageBody: () => void
}

const mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (value) => {
            dispatch(updateNewMessageBodyActionCreator(value))
        },
        sendMessageBody: () => {
            dispatch(sendMessageBodyActionCreator())
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
