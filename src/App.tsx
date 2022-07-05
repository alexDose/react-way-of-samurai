import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs, DialogsType, MessagesType} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostType} from "./components/Profile/Posts/Post";
import {RootStateType} from "./components/Redux/State";

type AppType = {
    state: RootStateType
}

export const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs/"
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/profile/" render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path="/news/" component={News}/>
                    <Route path="/music/" component={Music}/>
                    <Route path="/settings/" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}