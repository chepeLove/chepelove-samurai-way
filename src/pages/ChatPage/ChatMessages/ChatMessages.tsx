import React, {FC, useEffect, useState} from 'react';
import {ChatMessage} from "./ChatMessage/ChatMessage";
import {ChatMessageType} from "../Chat/Chat";



export const ChatMessages:FC<{ webSocketChanel: WebSocket | null }> = ({webSocketChanel}) => {
    const [messages,setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        const messageHandler = (event:MessageEvent)=>{
            const newMessage = JSON.parse(event.data)
            setMessages((prevMessages)=>[...prevMessages,...newMessage])
        };
        webSocketChanel?.addEventListener('message',messageHandler)

        return ()=>{
            webSocketChanel?.removeEventListener('message',messageHandler)
        }
    }, [webSocketChanel]);

    return (
        <div style={{height:'400px',overflowY:'auto'}}>
            {messages.map((message)=><ChatMessage key={message.userId} message={message}/>)}
        </div>
    );
};
