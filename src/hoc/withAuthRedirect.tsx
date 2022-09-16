import {StoreType} from "../Redux/reduxStore";
import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type MapStateToPropsRedirectType = {
    isAuth: boolean
}

const mapStateToPropsRedirect = (state: StoreType): MapStateToPropsRedirectType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<MapStateToPropsRedirectType> {
        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}