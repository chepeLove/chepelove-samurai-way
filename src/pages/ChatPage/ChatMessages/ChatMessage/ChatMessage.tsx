import React, {FC} from 'react';
import {ChatMessageAPIType} from "../../../../api/chat-api";

export const ChatMessage:FC<{message:ChatMessageAPIType}> = React.memo(({message}) => {
    return (
        <div>
            <img style={{width:'30px'}} src={message.photo} alt=""/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    );
})
