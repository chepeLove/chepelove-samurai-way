import {chatAPI, ChatMessageAPIType, StatusChanel} from "../api/chat-api";
import {AppThunkType} from "./redux-store";
import {Dispatch} from "redux";
import {v1} from "uuid";


export type ChatMessageType = ChatMessageAPIType & { id: string }

const ChatReducerInitialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusChanel
}

export const ChatReducer = (state = ChatReducerInitialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-MESSAGES': {
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(message => (
                    {...message, id: v1()}))]
                    .filter((_, index, array) => index >= array.length - 100)
            }
        }
        case 'CHANGE-STATUS': {
            return {
                ...state,
                status: action.payload.status
            }
        }
        default:
            return state
    }
}

export const changeStatus = (status: StatusChanel) =>
    ({type: 'CHANGE-STATUS' as const, payload: {status}})

export const setMessages = (messages: ChatMessageAPIType[]) =>
    ({type: 'SET-MESSAGES' as const, payload: {messages}})


let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandler = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = messages => {
            dispatch(setMessages(messages))
        }
    }

    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusChanel) => void) | null = null
const statusChangedHandler = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = status => {
            dispatch(changeStatus(status))
        }
    }

    return _statusChangedHandler
}

export const startGetMessages = (): AppThunkType => async (dispatch) => {
    chatAPI.createWSChanel()
    chatAPI.subscribe('messagesReceived', newMessageHandler(dispatch))
    chatAPI.subscribe('statusChanged', statusChangedHandler(dispatch))
}

export const stopGetMessages = (): AppThunkType => async (dispatch) => {
    chatAPI.unsubscribe('messagesReceived', newMessageHandler(dispatch))
    chatAPI.unsubscribe('statusChanged', statusChangedHandler(dispatch))
    chatAPI.deleteWSChanel()
}

export const sendMessage = (message: string): AppThunkType => async () => {
    chatAPI.sendMessage(message)
}


type ChangeStatus = ReturnType<typeof changeStatus>
type SetMessages = ReturnType<typeof setMessages>
type ActionsType = SetMessages | ChangeStatus