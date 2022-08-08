import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./components/Redux/reduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

/*type AppType = {
    store: StoreType
}*/

export const App = (/*props: AppType*/) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
                <Route path="/profile/" render={() => <Profile/>}/>
                <Route path="/news/" component={News}/>
                <Route path="/music/" component={Music}/>
                <Route path="/settings/" component={Settings}/>
            </div>
        </div>
    );
}