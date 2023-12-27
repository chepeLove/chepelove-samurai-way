import React, {useEffect, useState} from 'react';
import {ChatMessages} from "../ChatMessages/ChatMessages";
import {AddChatMessageForm} from "../AddChatMessageForm/AddChatMessageForm";

export type ChatMessageType = {
    message: string;
    photo: string;
    userId: number;
    userName: string;
}


export const Chat = () => {

    const [webSocketChanel, setWebSocketChanel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let newWSChanel: WebSocket;
        const closeChanelHandler = () => {
            setTimeout(createWSChanel, 3000)
        }

        function createWSChanel() {

            newWSChanel?.removeEventListener('close', closeChanelHandler)
            newWSChanel?.close()

            newWSChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            newWSChanel.addEventListener('close', closeChanelHandler)
            setWebSocketChanel(newWSChanel)

        }

        createWSChanel()

        return () => {
            newWSChanel.removeEventListener('close', closeChanelHandler)
            newWSChanel.close()
        }
    }, []);


    return (
        <>
            <ChatMessages webSocketChanel={webSocketChanel}/>
            <AddChatMessageForm webSocketChanel={webSocketChanel}/>
        </>
    );
};
