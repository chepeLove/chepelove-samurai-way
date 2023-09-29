import React from 'react';
import {
    InitialDialogsStateType,
    sendMessageActionCreator,
    updateNewMessageActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsState:InitialDialogsStateType
}

type mapDispatchToPropsType = {
    updateNewMessageBody:(newMessageText: string)=>void
    sendMessage:()=>void
}

export type DialogsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return {
        dialogsState:state.dialogsState
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updateNewMessageBody:(newMessageText: string)=>{
            dispatch(updateNewMessageActionCreator(newMessageText))
        },
        sendMessage:()=>{
            dispatch(sendMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

