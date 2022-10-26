import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import {StoreType} from "./Redux/reduxStore";
import {withAuthRedirect} from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component<{initializeApp: () => void}> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs/" render={withAuthRedirect(DialogsContainer)}/>
                    <Route path="/profile/:userId?" render={withAuthRedirect(ProfileContainer)}/>
                    <Route path="/users/" render={withAuthRedirect(UsersContainer)}/>
                    <Route path="/login/" render={withAuthRedirect(Login)}/>
                    <Route path="/news/" component={News}/>
                    <Route path="/music/" component={Music}/>
                    <Route path="/settings/" component={Settings}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: StoreType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
