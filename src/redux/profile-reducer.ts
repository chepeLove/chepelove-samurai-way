import {AppThunkType} from "./redux-store";
import {profileAPI} from "../api/api";

export type postsType = {
    post: string,
    id: string,
    likeCount: string
}

export type UserProfileType = {
    "aboutMe": string | null,
    "contacts": {
        "facebook": string | null,
        "website": string | null,
        "vk": string | null,
        "twitter": string | null,
        "instagram": string | null,
        "youtube": string | null,
        "github": string | null,
        "mainLink": string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null,
    "fullName": string | null,
    "userId": number,
    "photos": {
        "small": string | null,
        "large": string | null
    }
}

export type ProfileActionsType = AddPostActionCreatorType | SetUserProfileType | SetUserStatusType | DeletePostType


export type InitialProfileStateType = {
    posts: postsType[]
    profile:null | UserProfileType,
    status:string
}

const initialState: InitialProfileStateType = {
    posts: [
        {post: 'Hi', id: '1', likeCount: '10'},
        {post: 'Hi, how are you ?', id: '2', likeCount: '20'},
        {post: 'It\'s my first post?', id: '3', likeCount: '30'},
        {post: 'Hello', id: '4', likeCount: '40'},
        {post: 'qq', id: '5', likeCount: '50'},
    ],
    profile:null,
    status:''
}

export const ProfileReducer = (state: InitialProfileStateType = initialState,
                               action: ProfileActionsType): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                post: action.payload.newPostText,
                id: '5',
                likeCount: '110',
            }
            return {...state, posts: [...state.posts, newPost]}
        case 'SET-USER-PROFILE': {
            return {...state,profile:action.payload.profile}
        }
        case 'SET-USER-STATUS':{
            return {...state,status:action.payload.status}
        }
        case 'DELETE-POST':{
            return {...state,posts:state.posts.filter((el) => el.id != action.payload.id)}
        }
        default:
            return state
    }

};

type AddPostActionCreatorType = ReturnType<typeof addPost>

export const addPost = (newPostText:string) => {
    return {
        type: 'ADD-POST' as const,
        payload:{
            newPostText
        }
    }
}


type SetUserProfileType = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: 'SET-USER-PROFILE' as const,
        payload: {
            profile
        }
    }
}

type DeletePostType = ReturnType<typeof deletePost>
export const deletePost = (id:string) =>({type:'DELETE-POST',payload:{id}} as const )
export const getUserProfileTC = (userId: string):AppThunkType => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
           dispatch(setUserProfile(response.data))
        });
    }
}

type SetUserStatusType = ReturnType<typeof setUserStatus>

 const setUserStatus = (status:string) => {
    return{
        type:'SET-USER-STATUS' as const,
        payload:{
            status
        }
    }
}

export const getUserStatusTC = (userId:string):AppThunkType => {
    return (dispatch)=>{
        profileAPI.getStatus(userId).then(res =>{
            dispatch(setUserStatus(res.data))
        })
    }
}

export const updateUserStatusTC = (status:string):AppThunkType => {
    return (dispatch)=>{
        profileAPI.updateStatus(status).then(res =>{
            if(res.data.resultCode === 0){
            dispatch(setUserStatus(status))
            }
        })
    }
}
