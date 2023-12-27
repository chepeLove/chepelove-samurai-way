import React, {ChangeEvent, FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {sendMessage} from "../../../redux/chat-reducer";


export const AddChatMessageForm: FC<{}> = ({}) => {

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
                    >Send
            </button>
        </>
    );
};
