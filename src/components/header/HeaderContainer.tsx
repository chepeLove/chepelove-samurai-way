import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        authAPI.getMe().then((res)=>{
                debugger
                if(res.resultCode === 0){
                    let {id,login,email} = res.data
                    this.props.setAuthUserData(id,login,email)
                }
            })
    }

    render() {
    return (
        <Header login = {this.props.login}
                isAuth = {this.props.isAuth}
        />
    )
    }
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsTyp

type MapStateToPropsType = {
    login: string | null
    isAuth:boolean
}

type MapDispatchToPropsTyp = {
    setAuthUserData:(userId:string,login:string,email:string)=>void
}


const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth:state.auth.isAuth
    }
}

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer)
