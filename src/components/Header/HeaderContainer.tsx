import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, InitialStateUsersType} from "../Redux/authReducer";
import {store, StoreType} from "../Redux/reduxStore";
import {authApi} from "../../api/api";

type DispatchType = {
    getAuthUserData: () => void
}
type MapStateType = {
    isAuth: boolean
    login: null | string
}

class HeaderContainer extends React.Component<DispatchType & MapStateType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={store.getState().auth.isAuth} login={store.getState().auth.login}/>
    }
}

const mapStateToProps = (state: StoreType): InitialStateUsersType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.userId
})

export default connect (mapStateToProps, {getAuthUserData})(HeaderContainer)
