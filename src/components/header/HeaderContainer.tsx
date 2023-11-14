import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}
                    logout={this.props.logout}
            />
        )
    }
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsTyp

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsTyp = {
    getAuthUserData: () => void
    logout:()=>void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuthUserData,logout})(HeaderContainer)
