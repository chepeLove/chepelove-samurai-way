import styles from "./Users.module.css";
import userPhoto from "../../assets/avatar-user.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChange: (page: number) => void
    currentPage: number
    users: UsersType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    toggleFollowingProgress:(followingProgress:boolean,userId:number) => void
    followingInProgress:number[]
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(page => {
                return <span onClick={() => {
                    props.onPageChange(page)
                }}
                             className={props.currentPage === page ? styles.selectedPage : ''}>{page}</span>
            })}
        </div>
        {props.users.map(user => {
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
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true,user.id)
                                    usersAPI.unfollow(user.id).then(response => {
                                            if(response.resultCode === 0){
                                                props.unfollow(user.id)
                                            }
                                        props.toggleFollowingProgress(false,user.id)
                                        });
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true,user.id)
                                    usersAPI.follow(user.id).then(response => {
                                            if(response.resultCode === 0){
                                                props.follow(user.id)
                                            }
                                        props.toggleFollowingProgress(false,user.id)
                                        });
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