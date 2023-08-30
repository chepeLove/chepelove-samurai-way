import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {appStateType} from './App';
import {addPost} from "./redux/state";

export let rerenderEntireTree = (state:appStateType) => {
  ReactDOM.render(
      <App appState = {state} addPost={addPost} />,
  document.getElementById('root')
);
}

