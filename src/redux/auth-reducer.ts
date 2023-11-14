import {authAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

export type AuthReducerInitialStateType = {
    id:string | null,
    email:string | null,
    login:string | null,
    isAuth:boolean

}


const AuthReducerInitialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false

}

export type AuthActionsType = SetUserDataACType

export const AuthReducer = (state:AuthReducerInitialStateType = AuthReducerInitialState,action:AuthActionsType):AuthReducerInitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':{
            return {
                ...state,
                id:action.payload.userId,
                email:action.payload.email,
                login:action.payload.login,
                isAuth: action.payload.isAuth
            }
        }
        default:
            return state
    }
}


type SetUserDataACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId:string | null, login:string | null, email:string | null,isAuth:boolean) =>{
    return {
        type:'SET-USER-DATA' as const,
        payload:{
            userId,
            login,
            email,
            isAuth
        }
    }
}


export const getAuthUserData = ():AppThunkType => {
    return (dispatch) => {
        authAPI.getMe().then((res)=>{
            if(res.resultCode === 0){
                let {id,login,email} = res.data
                dispatch(setAuthUserData(id,login,email,true))
            }
        })
    }
}

export const login  = (email:string,password:string,rememberMe:boolean):AppThunkType =>{
    return (dispatch)=>{
        authAPI.login(email,password,rememberMe).then((res)=>{
            if(res.data.resultCode === 0){
                dispatch(getAuthUserData())
            }
        })
    }
}

export const logout  = ():AppThunkType =>{
    return (dispatch)=>{
        authAPI.logout().then((res)=>{
            if(res.data.resultCode === 0){
                dispatch(setAuthUserData(null,null,null,false))
            }
        })
    }
}


