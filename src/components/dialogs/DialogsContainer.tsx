import {
    InitialDialogsStateType,
    sendMessage,
    updateNewMessage
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogsPage:InitialDialogsStateType
    isAuth:boolean
}

type mapDispatchToPropsType = {
    updateNewMessage:(newMessageText: string)=>void
    sendMessage:()=>void
}

export type DialogsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return {
        dialogsPage:state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
//     return {
//         updateNewMessageBody:(newMessageText: string)=>{
//             dispatch(updateNewMessage(newMessageText))
//         },
//         sendMessage:()=>{
//             dispatch(sendMessage())
//         }
//     }
// }

export const DialogsContainer = connect(mapStateToProps,{
    updateNewMessage,
    sendMessage,
})(Dialogs)

