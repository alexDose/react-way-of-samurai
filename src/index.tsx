import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, state} from "./components/Redux/State";

ReactDOM.render(
    <App dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} posts={state.profilePage.posts} addPost={() => addPost}/>,
  document.getElementById('root')
);