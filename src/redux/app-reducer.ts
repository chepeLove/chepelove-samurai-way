import {AppThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const AppReducerInitialState = {
    initialized: false

}

export const AppReducer = (state: AppReducerInitialStateType = AppReducerInitialState, action: AppActionsType): AppReducerInitialStateType => {
    switch (action.type) {
        case 'app/SET-INITIALIZED': {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}


//Actions
export const initializedSuccessAC = () => ({type: 'app/SET-INITIALIZED'} as const)

//Thunks
export const initializeAppTC = (): AppThunkType => async (dispatch) => {
    try {
        await dispatch(getAuthUserData());
        dispatch(initializedSuccessAC());
    }catch (e){
        console.log(e)
    }
    }

//Types

export type AppReducerInitialStateType = {
    initialized: boolean
}

export type AppActionsType = InitializedSuccessACACType

type InitializedSuccessACACType = ReturnType<typeof initializedSuccessAC>
