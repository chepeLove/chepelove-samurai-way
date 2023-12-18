import {authAPI, securiryAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";
import {Dispatch} from "redux";

const AuthReducerInitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const AuthReducer = (state: AuthReducerInitialStateType = AuthReducerInitialState, action: AuthActionsType): AuthReducerInitialStateType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA': {
            return {
                ...state,
                id: action.payload.userId,
                email: action.payload.email,
                login: action.payload.login,
                isAuth: action.payload.isAuth
            }
        }
        case 'auth/GET-CAPTCHA-URL':{
            return {...state,captchaUrl:action.payload.url}
        }
        default:
            return state
    }
}


//Actions
export const setAuthUserData = (userId: string | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: 'auth/SET-USER-DATA' as const, payload: {userId, login, email, isAuth}})
export const getCaptchaUrlSuccess = (url:string) =>
    ({type: 'auth/GET-CAPTCHA-URL' as const, payload: {url}})
//Thunks
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    try {
        let response = await authAPI.getMe()
        if (response.resultCode === 0) {
            let {id, login, email} = response.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    } catch (e) {
        console.error(e)
    }

}

export const login = (email: string, password: string, rememberMe: boolean,captcha:string | null): AppThunkType => async (dispatch) => {
    try {
        let response = await authAPI.login(email, password, rememberMe,captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else {
            if(response.data.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            let messageError = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: messageError}))
        }
    } catch (e) {
        console.error(e)
    }
}

export const logout = (): AppThunkType => async (dispatch) => {
    try {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    } catch (e) {
        console.error(e)
    }
}

export const getCaptchaUrl = ():AppThunkType => async (dispatch) =>{
    try {
        const response = await securiryAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    } catch (e) {
        console.error(e)
    }
}

//Types

export type AuthReducerInitialStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    captchaUrl: string | null
}

export type AuthActionsType = SetUserDataACType | FormAction | GetCaptchaUrlSuccessType

type SetUserDataACType = ReturnType<typeof setAuthUserData>
type GetCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>

