import React from 'react';
import style from './Dialogs.module.css'
import {DialogsItems} from "./dialogsItem/DialogsItems";
import {Message} from "./message/Message";
import {dialogsStateType} from "../../App";

type dialogsPropsType = {
    dialogsState:dialogsStateType
}

export const Dialogs = (props:dialogsPropsType) => {
    return (
        <>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {props.dialogsState.dialogs.map((dialog)=>{
                        return(<DialogsItems name ={dialog.name} id = {dialog.id}/>
                        )})}
                </div>
                <div className={style.messages}>
                    {props.dialogsState.messages.map((message)=>{
                        return(
                            <Message message={message.message}/>
                        )
                    })}
                </div>
            </div>
        </>

    );
};

