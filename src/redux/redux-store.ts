import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth:AuthReducer
});


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);