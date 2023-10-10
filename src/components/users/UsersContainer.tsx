import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    InitialUsersStateType,
    setCurrentPageAC, setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type MapStateToProps = InitialUsersStateType

type MapDispatchToProps = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users: UsersType[]) => void
    setCurrentPage:(currentPage:number) => void
    setTotalUserCount:(totalCount:number) => void
}

export type UsersComponentType = MapStateToProps & MapDispatchToProps


export class UsersContainer extends React.Component<UsersComponentType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            });
    }

    onPageChange = (page:number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        return <Users totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        onPageChange = {this.onPageChange}
        currentPage = {this.props.currentPage}
        users = {this.props.users}
        unfollow={this.props.unfollow}
        follow = {this.props.follow}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(currentPage:number) =>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount:(totalCount:number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
