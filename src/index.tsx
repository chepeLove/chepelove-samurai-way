import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StoreType} from "./redux/state";

 let rerenderEntireTree = (store:StoreType) => {
    ReactDOM.render(
        <App appState = {store.state} addPost={store.addPost} updateNewPostText={store.updateNewPostText} />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)