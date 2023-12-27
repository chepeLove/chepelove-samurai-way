import React, {FC} from 'react';
import {ChatMessageType} from "../../Chat/Chat";

export const ChatMessage:FC<{message:ChatMessageType}> = ({message}) => {
    return (
        <div>
            <img style={{width:'30px'}} src={message.photo} alt=""/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    );
};
