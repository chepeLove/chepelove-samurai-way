import React, {useEffect, useRef, useState} from 'react';
import {ChatMessage} from "./ChatMessage/ChatMessage";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {ChatMessageType} from "../../../redux/chat-reducer";



export const ChatMessages = () => {
    const messages = useSelector<AppStateType,ChatMessageType[]>(state => state.chat.messages)
    const messageAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll,setAutoScroll] = useState(false)

    useEffect(() => {
        if(isAutoScroll){
            messageAnchorRef.current?.scrollIntoView({behavior:'smooth'})
        }
    }, [messages]);

    const onScrollHandler = (event:React.UIEvent<HTMLDivElement,UIEvent>) => {
        const element = event.currentTarget
        if(Math.abs((element.scrollHeight-element.scrollTop)-element.clientHeight)<300){
            !isAutoScroll && setAutoScroll(true)
        }else {
            isAutoScroll && setAutoScroll(false)
        }
    }

    return (
        <div style={{height:'400px',overflowY:'auto'}} onScroll={onScrollHandler}>
            {messages.map((message)=><ChatMessage key={message.id} message={message}/>)}
            <div ref={messageAnchorRef}></div>
        </div>
    );
};
