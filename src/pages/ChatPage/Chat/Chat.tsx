import React, {useEffect} from 'react';
import {ChatMessages} from "../ChatMessages/ChatMessages";
import {AddChatMessageForm} from "../AddChatMessageForm/AddChatMessageForm";
import {useDispatch, useSelector} from "react-redux";
import {startGetMessages, stopGetMessages} from "../../../redux/chat-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {StatusChanel} from "../../../api/chat-api";




export const Chat = () => {

    const dispatch = useDispatch()
    const status = useSelector<AppStateType,StatusChanel>(state => state.chat.status)

    useEffect(() => {
        dispatch(startGetMessages())
        return ()=>{
            dispatch(stopGetMessages())
        }
    }, []);

    return (
        <>
            {status === 'error' && <div>Some error occurred.Please refresh the page </div>}
            <>
                <ChatMessages/>
                <AddChatMessageForm/>
            </>
        </>
    );
};
