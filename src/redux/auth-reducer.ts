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

type AuthReducerActionsType = SetUserDataACType

export const AuthReducer = (state:AuthReducerInitialStateType = AuthReducerInitialState,action:AuthReducerActionsType):AuthReducerInitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':{
            return {
                ...state,
                id:action.payload.userId,
                email:action.payload.email,
                login:action.payload.login,
                isAuth: true
            }
        }
        default:
            return state
    }
}


type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (userId:string,login:string,email:string) =>{
    return {
        type:'SET-USER-DATA' as const,
        payload:{
            userId,
            login,
            email
        }
    }
}