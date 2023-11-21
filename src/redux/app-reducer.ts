import {AppThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

export type AppReducerInitialStateType = {
    initialized: boolean
}


const AppReducerInitialState = {
    initialized: false

}

export type AppActionsType = InitializedSuccessACACType

export const AppReducer = (state: AppReducerInitialStateType = AppReducerInitialState, action: AppActionsType): AppReducerInitialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}


type InitializedSuccessACACType = ReturnType<typeof initializedSuccessAC>

export const initializedSuccessAC = () => {
    return {
        type: 'SET-INITIALIZED',
    } as const
}

export const initializeAppTC = (): AppThunkType => {
    return (dispatch) => {
        let result = dispatch(getAuthUserData())
        result.then(()=>{
            dispatch(initializedSuccessAC())
        })
    }
}


