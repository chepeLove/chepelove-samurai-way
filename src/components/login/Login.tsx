import React, {FC} from 'react';
import {FormDataType, LoginReduxForm} from "./loginForm/LoginForm";
import {LoginPropsType} from "./loginContainer/LoginContainer";
import {Redirect} from "react-router-dom";


export const Login:FC<LoginPropsType> = ({login,isAuth,captchaUrl}) => {

    const onSubmit = (formData:FormDataType) => {
        login(formData.email,formData.password,formData.rememberMe,formData.captcha)
    }

    if(isAuth){
        return <Redirect to={'/profile'}/>
    }
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>
    );
};
