import React from 'react';
import {ActionDispatchType, dialogsStateType} from "./store";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    messages:[
        { message:'Hi', id:'1'},
        { message:'welcome', id:'2'},
        { message:'what?', id:'3'},
        { message:'Hello', id:'4'},
        { message:'qq', id:'5'},
    ],
    newMessageText:'',
    dialogs:[
        { name:'Dima', id:'1'},
        { name:'Kiril', id:'2'},
        { name:'Mark', id:'3'},
        { name:'Sasha', id:'4'},
        { name:'Vova', id:'5'},
    ]
}
export const DialogsReducer = (state:dialogsStateType = initialState,action:ActionDispatchType) => {

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

