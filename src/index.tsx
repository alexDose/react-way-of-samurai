import React from 'react';
import './index.css';
import {store} from "./Redux/reduxStore";
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
