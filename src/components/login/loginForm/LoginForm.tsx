import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


export type FormDataType = {
    email:string
    password:string
    rememberMe:boolean
}

const maxLength100 = maxLengthCreator(100)

const LoginForm: React.FC<InjectedFormProps <FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'email'}
                       component={FormControl}
                       tagName ={'input'}
                       name={'email'}
                       validate={[required, maxLength100]}
                />
            </div>
            <div>
                <Field placeholder={'password'}
                       component={FormControl}
                       tagName ={'input'}
                       type={'password'}
                       name={'password'}
                       validate={[required, maxLength100]}
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
