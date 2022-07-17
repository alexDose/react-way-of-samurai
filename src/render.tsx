import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, RootStateType, updateNewPostText} from "./components/Redux/State";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}