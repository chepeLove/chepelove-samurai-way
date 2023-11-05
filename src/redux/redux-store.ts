import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, ProfileReducer} from "./profile-reducer";
import {DialogsActionsType, DialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, UsersReducer} from "./users-reducer";
import {AuthActionsType, AuthReducer} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth:AuthReducer,
    form:formReducer
});



export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export type AppActionsType = UsersActionsType | ProfileActionsType | DialogsActionsType | AuthActionsType


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>


//@ts-ignore
window.store = store