import React from 'react';
import './index.css';
import {store} from "./components/Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
