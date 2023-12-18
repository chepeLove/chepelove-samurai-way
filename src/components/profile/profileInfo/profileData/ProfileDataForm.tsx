import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {UserProfileType} from "../../../../redux/profile-reducer";
import s from './../ProfileInfo.module.css'


type ProfileDataPropsType = {
    profile: UserProfileType
}

export type ProfileDataType = {
    fullName: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    aboutMe: string | null
}

const maxLength100 = maxLengthCreator(100)

const ProfileDataForm: FC<ProfileDataPropsType & InjectedFormProps<ProfileDataType, ProfileDataPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <button>save</button>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <b>Full name</b>: <Field placeholder={'Full name'}
                                         component={FormControl}
                                         tagName={'input'}
                                         name={'fullName'}
                                         validate={[required,maxLength100]}
            />
            </div>
            <div>
                <b>Looking for a job</b>: <Field type="checkbox"
                                                 component={'input'}
                                                 name={'lookingForAJob'}
            />
            </div>
            <div>
                <b>My professional skills</b>:<Field placeholder={'Skills'}
                                                     component={FormControl}
                                                     tagName={'textarea'}
                                                     name={'lookingForAJobDescription'}
                                                     validate={[maxLength100]}
            />
            </div>
            <div>
                <b>About me</b>:<Field placeholder={'About me'}
                                       component={FormControl}
                                       tagName={'textarea'}
                                       name={'aboutMe'}
                                       validate={[maxLength100]}
            />
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(props.profile.contacts).map((contactTitle)=>{
                const key = contactTitle as keyof typeof props.profile.contacts;
                return <div key={key} className={s.contact}>
                    <b>{key}</b> : <Field placeholder={key}
                                          component={FormControl}
                                          tagName={'input'}
                                          name={`contacts.` + key}
                                          validate={[maxLength100]}
                />
                </div>
            })}
            </div>
        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileDataType, ProfileDataPropsType>({form: 'profileData'})(ProfileDataForm)