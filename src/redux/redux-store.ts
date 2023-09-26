import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";

const reducers = combineReducers({
    profileState:ProfileReducer,
    dialogsState: DialogsReducer,
});



export const store = createStore(reducers);