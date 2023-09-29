import {deflate} from "zlib";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type dialogsType = {
    name: string,
    id: string
}

export type messagesType = {
    message: string,
    id: string
}

export type ActionDialogsDispatchType = {
    type: string
    newMessageText: string
}

export type InitialDialogsStateType = typeof initialState

const initialState = {
    messages: [
        {message: 'Hi', id: '1'},
        {message: 'welcome', id: '2'},
        {message: 'what?', id: '3'},
        {message: 'Hello', id: '4'},
        {message: 'qq', id: '5'},
    ] as messagesType[],
    newMessageText: '',
    dialogs: [
        {name: 'Dima', id: '1'},
        {name: 'Kiril', id: '2'},
        {name: 'Mark', id: '3'},
        {name: 'Sasha', id: '4'},
        {name: 'Vova', id: '5'},
    ] as dialogsType[]
}
export const DialogsReducer = (state: InitialDialogsStateType = initialState,
                               action: ActionDialogsDispatchType): InitialDialogsStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.newMessageText) {
                return {...state,newMessageText:action.newMessageText }
            }
            return state
        case SEND_MESSAGE:
            let newMessage = {message:state.newMessageText,id:'6'}
            return  {...state,messages: [...state.messages,newMessage],newMessageText: ''}
        default:
            return state
    }
};

export const updateNewMessageActionCreator = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    }as const
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }as const
}

