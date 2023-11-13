import React from 'react';
import style from './Dialogs.module.css'
import {DialogsItems} from "./dialogsItem/DialogsItems";
import {Message} from "./message/Message";
import {DialogsType} from "./DialogsContainer";
import {AddMessageFormRedux, AddMessageFormType} from "./addMessageForm/addMessageForm";

export const Dialogs = (props: DialogsType) => {

    const dialogsElement = props.dialogsPage.dialogs.map((dialog) => {
        return (
            <DialogsItems key={dialog.id} name={dialog.name}
                          id={dialog.id}
            />
        )
    })

    const messagesElements = props.dialogsPage.messages.map((message) => {
        return (
            <Message key={message.id} message={message.message}/>
        )
    })


    const AddMessage = (value:AddMessageFormType) => {
        props.sendMessage(value.newMessageText)
    }
    return (
        <>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={style.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <AddMessageFormRedux onSubmit = {AddMessage}/>
                    </div>
                </div>
            </div>
        </>

    );
};

