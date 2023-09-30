
export type dialogsType = {
    name: string,
    id: string
}

export type messagesType = {
    message: string,
    id: string
}

export type ActionDialogsDispatchType = UpdateNewMessageTextACType | SendMessageACType

export type InitialDialogsStateType = {
    messages:messagesType[]
    newMessageText:string
    dialogs:dialogsType[]
}

const initialState:InitialDialogsStateType = {
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
        case 'UPDATE-NEW-MESSAGE-TEXT':
            if (action.payload.newMessageText) {
                return {...state,newMessageText:action.payload.newMessageText }
            }
            return state
        case 'SEND-MESSAGE':
            let newMessage = {message:state.newMessageText,id:'6'}
            return  {...state,messages: [...state.messages,newMessage],newMessageText: ''}
        default:
            return state
    }
};

type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        payload:{
            newMessageText: newMessageText
        }

    }as const
}

type SendMessageACType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    }as const
}

