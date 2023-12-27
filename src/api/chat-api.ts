
type EventsNames = 'messagesReceived' | 'statusChanged'

const  subscribers = {
    messagesReceived : [] as MessagesReceivedSubscriberType[],
    statusChanged : [] as StatusChangedSubscriberType[]
}

let newWSChanel: WebSocket | null

const openChanelHandler = () => {
    notifySubscribersAboutStatus('ready')
}
const closeChanelHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createWSChanel, 3000)
}

const errorChanelHandler = ()=>{
    notifySubscribersAboutStatus('error')
    console.error('REFRESH PAGE')
}


const messageHandler = (event:MessageEvent)=>{
    const newMessage = JSON.parse(event.data)
    subscribers['messagesReceived'].forEach((subscriber)=>subscriber(newMessage))
};

const cleanUp = ()=>{
    newWSChanel?.removeEventListener('close', closeChanelHandler)
    newWSChanel?.removeEventListener('message', messageHandler)
    newWSChanel?.removeEventListener('open',openChanelHandler)
    newWSChanel?.removeEventListener('error',errorChanelHandler)
}

const notifySubscribersAboutStatus = (stats:StatusChanel)=>{
    subscribers.statusChanged.forEach(subscriber => subscriber(stats))

}
function createWSChanel() {
    cleanUp()
    newWSChanel?.close()

    newWSChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    newWSChanel.addEventListener('close', closeChanelHandler)
    newWSChanel.addEventListener('message', messageHandler)
    newWSChanel.addEventListener('open',openChanelHandler)
    newWSChanel.addEventListener('error',errorChanelHandler)
}
export const chatAPI = {
    createWSChanel() {
        createWSChanel()
    },
    deleteWSChanel() {
        subscribers.messagesReceived = []
        subscribers.statusChanged = []
        cleanUp()
        newWSChanel?.close()
    },
    subscribe(eventName:EventsNames,callback:MessagesReceivedSubscriberType | StatusChangedSubscriberType){
        // @ts-ignore
        subscribers[eventName].push(callback)
    },
    unsubscribe(eventName:EventsNames,callback:MessagesReceivedSubscriberType | StatusChangedSubscriberType){
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(subscriber => subscriber !== callback)
    },
    sendMessage(message:string){
        newWSChanel?.send(message)
    }
}



export type ChatMessageAPIType = {
    message: string;
    photo: string;
    userId: number;
    userName: string;
}

type MessagesReceivedSubscriberType = (messages:ChatMessageAPIType[])=>void
type StatusChangedSubscriberType = (status:StatusChanel)=>void

export type StatusChanel = 'pending' | 'ready'|'error'