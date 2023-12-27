import React, {FC} from 'react';
import {ChatMessage} from "./ChatMessage/ChatMessage";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {ChatMessageType} from "../../../api/chat-api";



export const ChatMessages:FC<{  }> = ({}) => {
    const messages = useSelector<AppStateType,ChatMessageType[]>(state => state.chat.messages)

    return (
        <div style={{height:'400px',overflowY:'auto'}}>
            {messages.map((message)=><ChatMessage key={message.userId} message={message}/>)}
        </div>
    );
};
