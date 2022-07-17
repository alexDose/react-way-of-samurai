import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, RootStateType, state} from "./components/Redux/State";

type renderType = {

}
export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)