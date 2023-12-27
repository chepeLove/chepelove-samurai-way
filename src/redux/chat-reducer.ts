import {chatAPI, ChatMessageType} from "../api/chat-api";
import {AppThunkType} from "./redux-store";
import {Dispatch} from "redux";

const ChatReducerInitialState = {
    messages: [] as ChatMessageType[]
}

export const ChatReducer = (state = ChatReducerInitialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-MESSAGES': {
            return {
                ...state,
                messages: [...state.messages,...action.payload.messages]
            }
        }
        default:
            return state
    }
}

export const setMessages= (messages:ChatMessageType[]) =>
    ({type: 'SET-MESSAGES' as const, payload: {messages}})


let _newMessageHandler:((messages:ChatMessageType[])=> void) | null = null
const newMessageHandler = (dispatch:Dispatch) => {
    if(_newMessageHandler === null) {
        _newMessageHandler = messages =>{
            dispatch(setMessages(messages))
        }
    }

    return _newMessageHandler
}
export const startGetMessages = ():AppThunkType => async (dispatch)=>{
    chatAPI.createWSChanel()
    chatAPI.subscribe(newMessageHandler(dispatch))
}

export const stopGetMessages = ():AppThunkType => async (dispatch)=>{
    chatAPI.unsubscribe(newMessageHandler(dispatch))
    chatAPI.deleteWSChanel()
}

export const sendMessage = (message:string):AppThunkType  => async ()=>{
    chatAPI.sendMessage(message)
}

type SetMessages = ReturnType<typeof setMessages>
type ActionsType = SetMessages