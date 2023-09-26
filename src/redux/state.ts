import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";


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

        this.state.profileState = ProfileReducer(this.state.profileState,action)
        this.state.dialogsState = DialogsReducer( this.state.dialogsState,action)

        this.callSubscriber(this.state)
    }
}







