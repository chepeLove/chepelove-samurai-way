

let  subscribers = [] as SubscriberType[]

let newWSChanel: WebSocket | null
const closeChanelHandler = () => {
    setTimeout(createWSChanel, 3000)
}


const messageHandler = (event:MessageEvent)=>{
    const newMessage = JSON.parse(event.data)
    subscribers.forEach((subscriber)=>subscriber(newMessage))
};
function createWSChanel() {

    newWSChanel?.removeEventListener('close', closeChanelHandler)
    newWSChanel?.close()

    newWSChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    newWSChanel.addEventListener('close', closeChanelHandler)
    newWSChanel.addEventListener('message', messageHandler)
}
export const chatAPI = {
    createWSChanel() {
        createWSChanel()
    },
    deleteWSChanel() {
        subscribers = []
        newWSChanel?.removeEventListener('close', closeChanelHandler)
        newWSChanel?.removeEventListener('message', messageHandler)
    },
    subscribe(callback:SubscriberType){
        subscribers.push(callback)
    },
    unsubscribe(callback:SubscriberType){
        subscribers = subscribers.filter(subscriber => subscriber !== callback)
    },
    sendMessage(message:string){
        newWSChanel?.send(message)
    }
}



export type ChatMessageType = {
    message: string;
    photo: string;
    userId: number;
    userName: string;
}

type SubscriberType = (messages:ChatMessageType[])=>void