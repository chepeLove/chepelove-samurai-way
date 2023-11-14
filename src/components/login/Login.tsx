import React, {FC} from 'react';
import {FormDataType, LoginReduxForm} from "./loginForm/LoginForm";
import {LoginPropsType} from "./loginContainer/LoginContainer";
import {Redirect} from "react-router-dom";


export const Login:FC<LoginPropsType> = ({login,isAuth}) => {

    const onSubmit = (formData:FormDataType) => {
        login(formData.email,formData.password,formData.rememberMe)
    }

    if(isAuth){
        return <Redirect to={'/profile'}/>
    }
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
