import React from 'react';
import {ActionDispatchType, dialogsStateType} from "./state";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
export const DialogsReducer = (state:dialogsStateType,action:ActionDispatchType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.newMessageText != null) {
                state.newMessageText = action.newMessageText
            }
            break;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = ''
            state.messages.push({message: newMessage, id: '6'},)
            break;
    }
    return state
};

export const updateNewMessageActionCreator = (newMessageText:string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText:newMessageText
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

