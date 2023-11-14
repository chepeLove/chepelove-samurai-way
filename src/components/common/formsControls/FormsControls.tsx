import {WrappedFieldProps} from "redux-form";
import {FC} from "react";
import s from './FormsControls.module.css'

type FormControlProps = WrappedFieldProps & {
    type: 'textarea' | 'input'
}

export const FormControl: FC<FormControlProps> = ({ input, meta, type, ...props }) => {
    const hasError = meta.touched && meta.error;
    const Tag = type;

    return (
        <>
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                <Tag {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
        </>
    );
};



