import React, {ChangeEvent, FC, useEffect, useState} from 'react';


export const AddChatMessageForm: FC<{ webSocketChanel: WebSocket | null }> = ({webSocketChanel}) => {

    const [message, setMessage] = useState('')

    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')


    useEffect(() => {
        const  openChanelHandler = () => {
            setReadyStatus('ready')
        }
        webSocketChanel?.addEventListener('open', openChanelHandler)


        return ()=>{
            webSocketChanel?.removeEventListener('open',openChanelHandler)
    }
    }, [webSocketChanel]);

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    }
    const sendChatMessageHandler = () => {
        if (message) {
            webSocketChanel?.send(message)
            setMessage('')
        }
    }

    return (
        <>
            <textarea onChange={onChangeHandler} value={message}/>
            <button onClick={sendChatMessageHandler}
                    disabled={webSocketChanel === null || readyStatus !== 'ready'}>Send
            </button>
        </>
    );
};
