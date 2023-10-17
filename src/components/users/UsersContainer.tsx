import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    InitialUsersStateType,
    setCurrentPage, setTotalUserCount,
    setUsers, toggleIsFetching,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

type MapStateToProps = InitialUsersStateType

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersComponentType = MapStateToProps & MapDispatchToProps


export class UsersContainer extends React.Component<UsersComponentType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUserCount(response.totalCount)
            });
    }

    onPageChange = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page,this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
            });
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChange={this.onPageChange}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                />
            }
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUserCount: (totalCount: number) => {
//             dispatch(setTotalUserCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching
})(UsersContainer)
