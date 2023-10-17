import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Setting} from "./components/setting/Setting";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";


export const App = () => {
    return (
            <div className="app__wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route render={() => <ProfileContainer
                    />} path={'/profile:userId?'}
                    />
                    <Route component={() => <DialogsContainer
                    />}
                           path={'/dialogs'}
                    />
                    <Route component={() => <UsersContainer/>}
                           path={'/users'}
                    />
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Setting} path={'/setting'}/>
                </div>
            </div>
    );
}
