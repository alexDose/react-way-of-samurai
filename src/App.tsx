import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./components/Redux/State";

type AppType = {
    store: StoreType
}

export const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs/"
                           render={() => <Dialogs store={props.store}/>}/>

                    <Route path="/profile/" render={() => <Profile profilePage={props.store.getState().profilePage}
                                                                   dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path="/news/" component={News}/>
                    <Route path="/music/" component={Music}/>
                    <Route path="/settings/" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}