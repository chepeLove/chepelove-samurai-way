import React from 'react';
import style from "../Dialogs.module.css";

type MessagePropsType = {
    message:string
}
export const Message = (props:MessagePropsType) => {
    return (
            <div className={style.message}>{props.message}</div>
    );
};
