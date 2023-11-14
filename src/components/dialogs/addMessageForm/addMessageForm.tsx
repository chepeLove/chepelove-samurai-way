import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

export type AddMessageFormType = {
    newMessageText: string;
};

const maxLength100 = maxLengthCreator(100)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl}
                       tagName="textarea"
                       name="newMessageText"
                       placeholder="Enter your message"
                       validate={[required, maxLength100]}/>
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