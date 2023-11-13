import React from 'react';
import { Field, InjectedFormProps, reduxForm} from "redux-form";

export type addPostFormType = {
    newPostText: string;
};

export const AddNewPostForm: React.FC<InjectedFormProps<addPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newPostText" placeholder="Enter your message" />
        </div>
        <div>
        <button>Add post</button>
        </div>
        </form>
);
};

export const AddNewPostFormRedux = reduxForm<addPostFormType>({
    form: 'profileAddPostForm',
})(AddNewPostForm);