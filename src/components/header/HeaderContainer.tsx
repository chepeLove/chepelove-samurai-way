import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials:true
        })
            .then((res)=>{
                debugger
                if(res.data.resultCode === 0){
                    let {id,login,email} = res.data.data
                    this.props.setAuthUserDataAC(id,login,email)
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
    setAuthUserDataAC:(userId:string,login:string,email:string)=>void
}


const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth:state.auth.isAuth
    }
}

export default connect (mapStateToProps, {setAuthUserDataAC}) (HeaderContainer)
