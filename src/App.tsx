import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Setting} from "./components/setting/Setting";
import HeaderContainer from "./components/header/HeaderContainer";
import {LoginContainer} from "./components/login/loginContainer/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {UsersPage} from "./components/users/UsersContainer";


type MapDispatchToProps = {
    initializeAppTC: () => void
}

type MapStateToProps = {
    initialized: boolean
}

type AppType = MapDispatchToProps & MapStateToProps

const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"))
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'))

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {

        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app__wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route component={() => <LoginContainer/>} path={'/login'}/>
                    <Route
                        component={withSuspense(ProfileContainer)}
                        path={'/profile:userId?'}/>
                    <Route
                        component={withSuspense(DialogsContainer)}
                        path={'/dialogs'}/>
                    <Route component={() => <UsersPage pageTitle={'Users'}/>} path={'/users'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Setting} path={'/setting'}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeAppTC}))(App)