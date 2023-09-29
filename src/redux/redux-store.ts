import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";

const rootReducer = combineReducers({
    profileState:ProfileReducer,
    dialogsState: DialogsReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);