import {AppThunkType} from "./redux-store";
import {profileAPI, ResultCode} from "../api/api";
import {ProfileDataType} from "../components/profile/profileInfo/profileData/ProfileDataForm";
import {stopSubmit} from "redux-form";

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

export type ProfileActionsType =
    AddPostActionCreatorType
    | SetUserProfileType
    | SetUserStatusType
    | DeletePostType
    | savePhotoSuccessType


export type InitialProfileStateType = {
    posts: postsType[]
    profile: null | UserProfileType,
    status: string
}

const initialState: InitialProfileStateType = {
    posts: [
        {post: 'Hi', id: '1', likeCount: '10'},
        {post: 'Hi, how are you ?', id: '2', likeCount: '20'},
        {post: 'It\'s my first post?', id: '3', likeCount: '30'},
        {post: 'Hello', id: '4', likeCount: '40'},
        {post: 'qq', id: '5', likeCount: '50'},
    ],
    profile: null,
    status: ''
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
            return {...state, profile: action.payload.profile}
        }
        case 'SET-USER-STATUS': {
            return {...state, status: action.payload.status}
        }
        case 'DELETE-POST': {
            return {...state, posts: state.posts.filter((el) => el.id != action.payload.id)}
        }
        case 'SAVE-PHOTO-SUCCESS':{
            debugger
            if(state.profile){
                return {...state,profile:{...state.profile,photos:{...state.profile.photos,large:action.payload.photo}}}
            }
           return state
        }
        default:
            return state
    }

};

type AddPostActionCreatorType = ReturnType<typeof addPost>

export const addPost = (newPostText: string) => {
    return {
        type: 'ADD-POST' as const,
        payload: {
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

type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>

export const savePhotoSuccess = (photo: string) => {
    return {
        type: 'SAVE-PHOTO-SUCCESS' as const,
        payload: {
            photo
        }
    }
}

type DeletePostType = ReturnType<typeof deletePost>
export const deletePost = (id: string) => ({type: 'DELETE-POST', payload: {id}} as const)
export const getUserProfileTC = (userId: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        });
    }
}

type SetUserStatusType = ReturnType<typeof setUserStatus>

const setUserStatus = (status: string) => {
    return {
        type: 'SET-USER-STATUS' as const,
        payload: {
            status
        }
    }
}

export const getUserStatusTC = (userId: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(res => {
            dispatch(setUserStatus(res.data))
        })
    }
}

export const updateUserStatusTC = (status: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === ResultCode.Success) {
                dispatch(setUserStatus(status))
            }
        })
    }
}

export const savePhotoTC = (photo: File): AppThunkType => {
    return (dispatch) => {
        profileAPI.savePhoto(photo).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(savePhotoSuccess(res.data.data.photos.large))
            }
        })
    }
}
export const saveProfileTC = (newProfileData:ProfileDataType): AppThunkType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id ?? ''
        let res = await profileAPI.saveProfile(newProfileData);
        if (res.data.resultCode === ResultCode.Success) {
            dispatch(getUserProfileTC(userId))
        } else {
            let messageError = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
            dispatch(stopSubmit('profileData', {_error: messageError}))
            return Promise.reject(res.data.messages[0])
        }
    }
}
