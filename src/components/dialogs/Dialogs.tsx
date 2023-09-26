import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogsItems} from "./dialogsItem/DialogsItems";
import {Message} from "./message/Message";
import {
    dialogsStateType,
} from "../../redux/store";

type dialogsPropsType = {
    dialogsState:dialogsStateType
    updateNewMessageBody:(newMessageText:string)=>void
    sendMessage:()=>void
}

export const Dialogs = (props: dialogsPropsType) => {
    const dialogsElement = props.dialogsState.dialogs.map((dialog) => {
        return (
            <DialogsItems name={dialog.name}
                          id={dialog.id}
            />
        )
    })

    const messagesElements = props.dialogsState.messages.map((message) => {
        return (
            <Message message={message.message}/>
        )
    })

    let newMessageText = props.dialogsState.newMessageText

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageText = event.target.value
        props.updateNewMessageBody(newMessageText)
    }
    const onSendMessageClick = () => {
        props.sendMessage()
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
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

