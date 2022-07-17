import React from 'react';
import './index.css';
import {state} from "./components/Redux/State";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state)