import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Setting} from "./components/setting/Setting";
import {ActionDispatchType, StateType} from "./redux/state";

export type appPropsType = {
    appState: StateType
    dispatch: (action: ActionDispatchType) => void
}


function App(props: appPropsType) {
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route render={() => <Profile profileState={props.appState.profileState}
                                                  dispatch={props.dispatch}
                    />} path={'/profile'}
                    />
                    <Route component={() => <Dialogs dialogsState={props.appState.dialogsState}
                                                     dispatch={props.dispatch}
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

export default App;
