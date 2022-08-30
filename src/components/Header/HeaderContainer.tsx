import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateUsersType, setUserDataAC} from "../Redux/authReducer";
import {store, StoreType} from "../Redux/reduxStore";

type DispatchType = {
    setUserDataAC: (id: number, email: string, login: string) => void
}
type MapStateType = {
    isAuth: boolean
    login: null | string
}

class HeaderContainer extends React.Component<DispatchType & MapStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserDataAC(id, email, login)
                }
            })
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

export default connect (mapStateToProps, {setUserDataAC})(HeaderContainer)
