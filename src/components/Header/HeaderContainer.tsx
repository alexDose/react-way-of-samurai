import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, InitialStateUsersType, logout} from "../../Redux/authReducer";
import {store, StoreType} from "../../Redux/reduxStore";

type DispatchType = {
    getAuthUserData: () => void
    logout: () => void
}
type MapStateType = {
    isAuth: boolean
    login: null | string
    email: null | string
    userId: null | number
}

class HeaderContainer extends React.Component<DispatchType & MapStateType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): InitialStateUsersType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.userId
})

export default connect (mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
