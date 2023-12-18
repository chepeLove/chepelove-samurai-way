import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import {Login} from "../Login";
import {AppStateType} from "../../../redux/redux-store";

type MapDispatchToPropsType = {
    login:(email:string,password:string,rememberMe:boolean,captcha:string | null) => void
}

type MapStateToPropsType = {
    isAuth:boolean
    captchaUrl: string | null
}

export type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps =(state:AppStateType):MapStateToPropsType =>{
    return {
        isAuth:state.auth.isAuth,
        captchaUrl:state.auth.captchaUrl
    }
}

export const LoginContainer = connect(mapStateToProps,{login})(Login)