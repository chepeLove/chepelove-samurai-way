import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


export type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const maxLength10 = maxLengthCreator(10)

const LoginForm: React.FC<InjectedFormProps <FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'login'}
                       component={FormControl}
                       type ={'input'}
                       name={'login'}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field placeholder={'password'}
                       component={FormControl}
                       type ={'input'}
                       name={'password'}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field type="checkbox"
                       component={'input'}
                       name={'rememberMe'}
                />
                <span>remember me</span>
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
