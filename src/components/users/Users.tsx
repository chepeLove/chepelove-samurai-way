import styles from "./Users.module.css";
import userPhoto from "../../assets/avatar-user.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChange: (page: number) => void
    currentPage: number
    users: UsersType[]
    followingInProgress: number[]
    unfollowTC: (userId: number) => void
    followTC: (userId: number) => void
}

type UsersStateType = {
    maxCurrentPage: number,
    minCurrentPage: number,
    step: number
}

export class Users extends React.Component<UsersPropsType,UsersStateType>  {

    constructor(props: UsersPropsType) {
        super(props);
        this.state = {
            maxCurrentPage: 10,
            minCurrentPage: 1,
            step: 5
        }
    }

    render() {

        const pages: number[] = []

        for (let i = this.state.minCurrentPage; i <= this.state.maxCurrentPage; i++) {
            pages.push(i)
        }

        const nextPagesUsers = (isDirection: boolean) => {
            if (isDirection) {
                this.setState((state) => ({
                    minCurrentPage: state.minCurrentPage + state.step,
                    maxCurrentPage: state.maxCurrentPage + state.step
                }))
            } else {
                this.state.minCurrentPage > this.state.step &&
                this.setState((state) => ({
                    minCurrentPage: state.minCurrentPage - state.step,
                    maxCurrentPage: state.maxCurrentPage - state.step
                }))
            }
        }

    return <div>
        <div>
            <button onClick={() => nextPagesUsers(false)}>{'<'}</button>
            {pages.map(el => {
                return <button key={el} onClick={() => this.props.onPageChange(el)}>{el}</button>

            })}
            <button onClick={() => nextPagesUsers(true)}>{'>'}</button>
        </div>
        {this.props.users.map(user => {
            return <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile' + user.id}>
                                <img className={styles.userPhoto} src={user.photos.small ?
                                    user.photos.small : userPhoto} alt=""
                                />
                            </NavLink>

                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={this.props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {this.props.unfollowTC(user.id)}}>Unfollow</button>
                                :
                                <button disabled={this.props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {this.props.followTC(user.id)}}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                             <div>{'user.location.county'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
            </div>
        })}
    </div>;
    }
}