import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialUsersStateType, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";

type MapStateToProps = InitialUsersStateType

type MapDispatchToProps = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users: UsersType[]) => void
}

export type UsersComponentType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users:state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        follow: (userId:number)=> {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:UsersType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
