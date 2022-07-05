import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, state} from "./components/Redux/State";

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);