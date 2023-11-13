import React from 'react';
import { Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageFormType = {
    newMessageText: string;
};

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageText" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm);