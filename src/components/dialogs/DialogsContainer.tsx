import {
    InitialDialogsStateType,
    sendMessage,
    updateNewMessage
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogsPage:InitialDialogsStateType
}

type mapDispatchToPropsType = {
    updateNewMessage:(newMessageText: string)=>void
    sendMessage:()=>void
}

export type DialogsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return {
        dialogsPage:state.dialogsPage,
    }
}

compose(withAuthRedirectComponent,connect(mapStateToProps,{
    updateNewMessage,
    sendMessage,
}))(Dialogs)

const AuthRedirectComponent = withAuthRedirectComponent(Dialogs)

export const DialogsContainer = connect(mapStateToProps,{
    updateNewMessage,
    sendMessage,
})(AuthRedirectComponent)

