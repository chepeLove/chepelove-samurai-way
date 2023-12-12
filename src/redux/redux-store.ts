import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileActionsType, ProfileReducer} from "./profile-reducer";
import {DialogsActionsType, DialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, UsersReducer} from "./users-reducer";
import {AuthActionsType, AuthReducer} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from 'redux-form'
import {AppReducer} from "./app-reducer";

const rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth:AuthReducer,
    form:formReducer,
    app:AppReducer
});



export type AppStateType = ReturnType<typeof rootReducer>



const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export type AppActionsType = UsersActionsType | ProfileActionsType | DialogsActionsType | AuthActionsType


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>


//@ts-ignore
window.store = store