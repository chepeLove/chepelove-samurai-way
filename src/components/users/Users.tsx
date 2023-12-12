import styles from "./Users.module.css";
import userPhoto from "../../assets/avatar-user.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/paginator/Paginator";

type UsersPropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChange: (page: number) => void
    currentPage: number
    users: UsersType[]
    followingInProgress: number[]
    unfollowTC: (userId: number) => void
    followTC: (userId: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    render() {
        return <div>
            <Paginator totalItemsCount={this.props.totalItemsCount}
                       pageSize={this.props.pageSize}
                       onPageChange={this.props.onPageChange}
                       currentPage={this.props.currentPage}
            />
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
                                        onClick={() => {
                                            this.props.unfollowTC(user.id)
                                        }}>Unfollow</button>
                                :
                                <button disabled={this.props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            this.props.followTC(user.id)
                                        }}>Follow</button>}
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