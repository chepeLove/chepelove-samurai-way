import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Setting} from "./components/setting/Setting";

import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {Store} from "redux";
import {ActionDispatchType,StateType} from "./redux/store";


export type appPropsType = {
    // store:Store<StateType,ActionDispatchType>
}


export const App = (props: appPropsType) => {
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route render={() => <Profile
                    />} path={'/profile'}
                    />
                    <Route component={() => <DialogsContainer
                    />}
                           path={'/dialogs'}
                    />
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Setting} path={'/setting'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
