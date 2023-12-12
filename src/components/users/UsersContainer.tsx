import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followTC, getUsersTC,
    InitialUsersStateType,
    unfollowTC,
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

type MapStateToProps = InitialUsersStateType

type MapDispatchToProps = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    unfollowTC:(userId:number)=>void
    followTC:(userId:number) => void
}

export type UsersComponentType = MapStateToProps & MapDispatchToProps


export class UsersContainer extends React.Component<UsersComponentType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (page: number) => {
        this.props.getUsersTC(page, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <Users totalItemsCount={this.props.totalItemsCount}
                       pageSize={this.props.pageSize}
                       onPageChange={this.onPageChange}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unfollowTC={this.props.unfollowTC}
                       followTC = {this.props.followTC}
                       followingInProgress={this.props.followingInProgress}
                />
            }
        </>
    }
}

// const mapStateToProps = (state: AppStateType): MapStateToProps => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default connect(mapStateToProps, {
    getUsersTC,
    unfollowTC,
    followTC
})(UsersContainer)
