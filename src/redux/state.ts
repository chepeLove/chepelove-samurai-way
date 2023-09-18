const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type postsType = {
    post:string,
    id:string,
    likeCount:string
}

export type dialogsType = {
    name:string,
    id:string
}

export type profileStateType = {
    posts:postsType[]
    newPostText:string

}

export type messagesType = {
    message:string,
    id:string
}

export type dialogsStateType = {
    messages:messagesType[]
    dialogs:dialogsType[]
    newMessageText:string
}

export type StateType = {
    profileState:profileStateType
    dialogsState:dialogsStateType
}

export type ActionDispatchType = {
    type:string
    newPostText?:string
    newMessageText?:string
}

export type StoreType = {
    state:StateType
    subscribe:(observer:(state: StateType)=>void) => void
    getState:()=>StateType
    callSubscriber:(state: StateType) => void
    dispatch:(action:ActionDispatchType)=>void
}

export let store:StoreType = {
    state: {
        profileState:{
            posts:[
                { post:'Hi', id:'1',likeCount:'10'},
                { post:'Hi, how are you ?', id:'2',likeCount:'20'},
                { post:'It\'s my first post?', id:'3',likeCount:'30'},
                { post:'Hello', id:'4',likeCount:'40'},
                { post:'qq', id:'5',likeCount:'50'},
            ],
            newPostText: ''
        },
        dialogsState:{
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
    },
    getState(){
        return this.state
    },
    callSubscriber(state){

    },
    subscribe(observer){
        this.callSubscriber = observer
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                post:this.state.profileState.newPostText,
                id: '5',
                likeCount:'110',
            }
            this.state.profileState.posts.push(newPost)
            this.state.profileState.newPostText = ''
            this.callSubscriber(this.state)
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
            if (action.newPostText != null) {
                this.state.profileState.newPostText = action.newPostText
            }
            this.callSubscriber(this.state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            if (action.newMessageText != null) {
                this.state.dialogsState.newMessageText = action.newMessageText
                this.callSubscriber(this.state)
            }
        }
        else if (action.type === SEND_MESSAGE){
            let newMessage = this.state.dialogsState.newMessageText
                this.state.dialogsState.newMessageText = ''
                this.state.dialogsState.messages.push({ message:newMessage, id:'6'},)
            this.callSubscriber(this.state)
        }
    }
}

export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (newPostText:string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText:newPostText
    }
}

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



