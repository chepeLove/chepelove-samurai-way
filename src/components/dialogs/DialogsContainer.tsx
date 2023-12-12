import {
    InitialDialogsStateType,
    sendMessage,
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
    sendMessage:(newMessageText:string)=>void
}

export type DialogsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return {
        dialogsPage:state.dialogsPage,
    }
}

compose(withAuthRedirectComponent,connect(mapStateToProps,{
    sendMessage,
}))(Dialogs)

const AuthRedirectComponent = withAuthRedirectComponent(Dialogs)

  const DialogsContainer = connect(mapStateToProps,{
    sendMessage,
})(AuthRedirectComponent)

export default DialogsContainer;

