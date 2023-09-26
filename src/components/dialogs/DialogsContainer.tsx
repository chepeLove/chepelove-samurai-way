import React from 'react';
import {
    ActionDispatchType,
    StateType,
} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Store} from "redux";
import { StoreContext } from '../../StoreContext';


type dialogsPropsType = {

}

export const DialogsContainer = (props: dialogsPropsType) => {

    return <StoreContext.Consumer>
        {(store: Store<StateType, ActionDispatchType>) => {
            const state = store.getState()
            const onNewMessageChange = (newMessageText: string) => {
                store.dispatch(updateNewMessageActionCreator(newMessageText))
            }
            const onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            }
            return <Dialogs dialogsState={state.dialogsState}
                            updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
            />
        }
    }
    </StoreContext.Consumer>
};

