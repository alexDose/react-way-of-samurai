import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state} from "./components/Redux/State";

ReactDOM.render(
    <App dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} posts={state.profilePage.posts}/>,
  document.getElementById('root')
);