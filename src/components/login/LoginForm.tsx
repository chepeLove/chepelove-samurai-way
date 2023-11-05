import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const LoginForm: React.FC<InjectedFormProps <FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field type="checkbox" component={'input'} name={'rememberMe'}/> <span>remember me</span>
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form:'login'
})(LoginForm)
