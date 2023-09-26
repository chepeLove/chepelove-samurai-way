import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {StateType} from "./redux/store";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {StoreContext} from "./StoreContext";

 let rerenderEntireTree = (state:StateType) => {
     ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value = {store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
    const state = store.getState()
    rerenderEntireTree(state)
})
