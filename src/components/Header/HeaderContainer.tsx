import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {InitialStateUsersType, logout} from "../../Redux/authReducer";
import {StoreType} from "../../Redux/reduxStore";

type DispatchType = {
    logout: () => void
}
type MapStateType = {
    isAuth: boolean
    login: null | string
    email: null | string
    userId: undefined | string
}

class HeaderContainer extends React.Component<DispatchType & MapStateType> {
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

export default connect (mapStateToProps, {logout})(HeaderContainer)
