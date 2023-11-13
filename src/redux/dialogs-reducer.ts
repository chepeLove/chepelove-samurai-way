
export type dialogsType = {
    name: string,
    id: string
}

export type messagesType = {
    message: string,
    id: string
}

export type DialogsActionsType =  SendMessageACType

export type InitialDialogsStateType = {
    messages:messagesType[]
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
    dialogs: [
        {name: 'Dima', id: '1'},
        {name: 'Kiril', id: '2'},
        {name: 'Mark', id: '3'},
        {name: 'Sasha', id: '4'},
        {name: 'Vova', id: '5'},
    ] as dialogsType[]
}
export const DialogsReducer = (state: InitialDialogsStateType = initialState,
                               action: DialogsActionsType): InitialDialogsStateType => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {message:action.payload.newMessageText,id:'6'}
            return  {...state,messages: [...state.messages,newMessage]}
        default:
            return state
    }
};



type SendMessageACType = ReturnType<typeof sendMessage>

export const sendMessage = (newMessageText:string) => {
    return {
        type: 'SEND-MESSAGE' as const,
        payload:{
            newMessageText
        }
    }
}

