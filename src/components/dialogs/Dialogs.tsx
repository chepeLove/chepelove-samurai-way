import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogsItems} from "./dialogsItem/DialogsItems";
import {Message} from "./message/Message";
import {
    ActionDispatchType,
    dialogsStateType,
} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";

type dialogsPropsType = {
    dialogsState:dialogsStateType
    dispatch:(action:ActionDispatchType)=>void
}

export const Dialogs = (props:dialogsPropsType) => {

    const dialogsElement = props.dialogsState.dialogs.map((dialog)=>{
            return (
                <DialogsItems name ={dialog.name}
                              id = {dialog.id}
                />
            )
    })

    const messagesElements = props.dialogsState.messages.map((message)=>{
            return(
                <Message message={message.message}/>
            )
        })

    let newMessageText = props.dialogsState.newMessageText

    const onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageText = event.target.value
        props.dispatch(updateNewMessageActionCreator(newMessageText))
    }
    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
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
                        <div>
                            <textarea placeholder={'Enter your message'}
                                      onChange={onNewMessageChange}
                                       value={newMessageText}
                        ></textarea>
                        </div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </>

    );
};

