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

export type postsType = {
    post:string,
    id:string,
    likeCount:string
}

export type dialogsType = {
    name:string,
    id:string
}

export type profileStateType = {
    posts:postsType[]
}

export type messagesType = {
    message:string,
    id:string
}

export type dialogsStateType = {
    messages:messagesType[]
    dialogs:dialogsType[]
}

export type appStateType = {
    profileState:profileStateType
    dialogsState:dialogsStateType
}


export type appPropsType = {
    appState: appStateType
}


function App(props:appPropsType) {
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route render={()=><Profile profileState = {props.appState.profileState}/>} path={'/profile'}/>
                    <Route component={()=><Dialogs dialogsState = {props.appState.dialogsState}/>} path={'/dialogs'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Setting} path={'/setting'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
