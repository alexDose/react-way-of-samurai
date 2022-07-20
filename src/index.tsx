import React from 'react';
import './index.css';
import {state, subscribe} from "./components/Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, RootStateType, updateNewPostText} from "./components/Redux/State";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(() => rerenderEntireTree(state))
