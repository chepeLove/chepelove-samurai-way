
let rerenderEntireTree = (store: StoreType) => {

}
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
}

export type StateType = {
    profileState:profileStateType
    dialogsState:dialogsStateType
}

export type StoreType = {
    state:StateType
    addPost: ()=>void
    updateNewPostText:(newPostText:string)=>void
    subscribe:(observer:(store:StoreType)=>void) => void
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
            dialogs:[
                { name:'Dima', id:'1'},
                { name:'Kiril', id:'2'},
                { name:'Mark', id:'3'},
                { name:'Sasha', id:'4'},
                { name:'Vova', id:'5'},
            ]
        }
    },
    addPost(){
        let newPost = {
            post:this.state.profileState.newPostText,
            id: '5',
            likeCount:'110',
        }
        this.state.profileState.posts.push(newPost)
        this.state.profileState.newPostText = ''
        rerenderEntireTree(store)
    },
    updateNewPostText(newPostText:string){
        this.state.profileState.newPostText = newPostText
        rerenderEntireTree(store)
    },
    subscribe(observer:(store:StoreType)=>void){
        rerenderEntireTree = observer
    },
}



// export let state = {
//     profileState:{
//         posts:[
//             { post:'Hi', id:'1',likeCount:'10'},
//             { post:'Hi, how are you ?', id:'2',likeCount:'20'},
//             { post:'It\'s my first post?', id:'3',likeCount:'30'},
//             { post:'Hello', id:'4',likeCount:'40'},
//             { post:'qq', id:'5',likeCount:'50'},
//         ],
//         newPostText: ''
//     },
//     dialogsState:{
//         messages:[
//             { message:'Hi', id:'1'},
//             { message:'welcome', id:'2'},
//             { message:'what?', id:'3'},
//             { message:'Hello', id:'4'},
//             { message:'qq', id:'5'},
//         ],
//         dialogs:[
//             { name:'Dima', id:'1'},
//             { name:'Kiril', id:'2'},
//             { name:'Mark', id:'3'},
//             { name:'Sasha', id:'4'},
//             { name:'Vova', id:'5'},
//         ]
//     }
// }

// export const addPost = ()=>{
//     let newPost = {
//         post:state.profileState.newPostText,
//         id:'5',
//         likeCount:'110'
//     }
//     state.profileState.posts.push(newPost)
//     state.profileState.newPostText = ''
//     rerenderEntireTree(state)
// }

// export const updateNewPostText = (newPostText:string) => {
//     state.profileState.newPostText = newPostText
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer:()=>void) => {
//     rerenderEntireTree = observer
// }



