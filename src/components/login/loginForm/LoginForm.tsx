import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from '../../common/formsControls/FormsControls.module.css'


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha:string | null
}

type FormDataPropsType = {
    captchaUrl:string | null
}

const maxLength100 = maxLengthCreator(100)

const LoginForm: React.FC<FormDataPropsType & InjectedFormProps<FormDataType, FormDataPropsType>> = ({handleSubmit, error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'email'}
                       component={FormControl}
                       tagName={'input'}
                       name={'email'}
                       validate={[required, maxLength100]}
                />
            </div>
            <div>
                <Field placeholder={'password'}
                       component={FormControl}
                       tagName={'input'}
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
            {captchaUrl && <img src={captchaUrl} alt={'captchaImage'}/>}
            {captchaUrl && <Field tagName={'input'}
                                  component={FormControl}
                                  name={'captcha'}
                                  placeholder={'text captcha'}
                                  validate={[required]}
            />}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType,FormDataPropsType>({
    form: 'login'
})(LoginForm)
