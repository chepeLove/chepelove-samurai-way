import React, {useEffect} from 'react';
import {ChatMessages} from "../ChatMessages/ChatMessages";
import {AddChatMessageForm} from "../AddChatMessageForm/AddChatMessageForm";
import {useDispatch} from "react-redux";
import {startGetMessages, stopGetMessages} from "../../../redux/chat-reducer";




export const Chat = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetMessages())
        return ()=>{
            dispatch(stopGetMessages())
        }
    }, []);

    return (
        <>
            <ChatMessages />
            <AddChatMessageForm />
        </>
    );
};
