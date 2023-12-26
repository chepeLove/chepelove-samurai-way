import React, {FC} from 'react';
import {Field, Form, Formik} from "formik";
import {FilterUsersType} from "../../../redux/users-reducer";




type FormType ={
    term:string
    friend:'true'|'false'|'null'
}

type UserSearchFormPropsType = {
    onFilterChanged : (filter:FilterUsersType)=> void
    filter:FilterUsersType
}


const userSearchFormValidate = ()=>{
    const errors = {};
    return errors;
}


export const UserSearchForm:FC<UserSearchFormPropsType> = ({onFilterChanged,filter}) => {

    const submit = (values:FormType, { setSubmitting }:{setSubmitting:(isSubmitting: boolean) => void}) => {
        const filer:FilterUsersType = {
            term: values.term,
            friend:values.friend === 'null' ? null : values.friend ==='true' ? true : false
        }
        onFilterChanged(filer)
        setSubmitting(false)
    }
    return (
        <div>
            <Formik
                initialValues={{ term: filter.term,friend:'null'}}
                validate={userSearchFormValidate}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                        <Field as="select" name="friend">
                            <option value="null">All</option>
                            <option value="true">Followed</option>
                            <option value="false">Unfollowed</option>
                        </Field>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
