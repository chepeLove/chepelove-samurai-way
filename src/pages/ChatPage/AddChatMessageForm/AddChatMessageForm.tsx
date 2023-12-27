import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../../redux/chat-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {StatusChanel} from "../../../api/chat-api";


export const AddChatMessageForm = () => {

    const status = useSelector<AppStateType,StatusChanel>(state => state.chat.status)
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()


    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    }
    const sendChatMessageHandler = () => {
        if (message) {
           dispatch(sendMessage(message))
            setMessage('')
        }
    }

    return (
        <>
            <textarea onChange={onChangeHandler} value={message}/>
            <button onClick={sendChatMessageHandler}
                    disabled={status !== 'ready'}
                    >Send
            </button>
        </>
    );
};
