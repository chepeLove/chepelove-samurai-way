import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";


 let rerenderEntireTree = () => {
     ReactDOM.render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree()