import React from 'react'
import axios from "axios";
import {UsersComponentType} from "./UsersContainer";
import {Users} from "./Users";
export class UsersAPIComponent extends React.Component<UsersComponentType>{

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