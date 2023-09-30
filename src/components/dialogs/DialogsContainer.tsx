import {
    InitialDialogsStateType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage:InitialDialogsStateType
}

type mapDispatchToPropsType = {
    updateNewMessageBody:(newMessageText: string)=>void
    sendMessage:()=>void
}

export type DialogsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return {
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updateNewMessageBody:(newMessageText: string)=>{
            dispatch(updateNewMessageTextAC(newMessageText))
        },
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

