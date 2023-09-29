import React, {ChangeEvent, useRef} from 'react';
import style from './Dialogs.module.css'
import {DialogsItems} from "./dialogsItem/DialogsItems";
import {Message} from "./message/Message";
import {DialogsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsType) => {

    const dialogsElement = props.dialogsState.dialogs.map((dialog) => {
        return (
            <DialogsItems key={dialog.id} name={dialog.name}
                          id={dialog.id}
            />
        )
    })

    const messagesElements = props.dialogsState.messages.map((message) => {
        return (
            <Message key={message.id} message={message.message}/>
        )
    })

    const newMessageElement = useRef<HTMLTextAreaElement>(null)


    const onNewMessageChange = () => {
        if (newMessageElement.current !== null) {
            props.updateNewMessageBody(newMessageElement.current.value)
        }
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
                            <textarea
                                ref={newMessageElement}
                                placeholder="Enter your message"
                                onChange={onNewMessageChange}
                                value={props.dialogsState.newMessageText}
                            />
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

