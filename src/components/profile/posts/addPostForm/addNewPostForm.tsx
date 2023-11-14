import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {FormControl} from "../../../common/formsControls/FormsControls";

export type addPostFormType = {
    newPostText: string;
};

const maxLength100 = maxLengthCreator(100)

export const AddNewPostForm: React.FC<InjectedFormProps<addPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl}
                       tagName="textarea"
                       name="newPostText"
                       placeholder="Enter your post"
                       validate={[required, maxLength100]}/>
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