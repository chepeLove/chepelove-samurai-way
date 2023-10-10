import styles from "./Users.module.css";
import userPhoto from "../../assets/avatar-user.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsersCount:number
    pageSize:number
    onPageChange:(page:number) => void
    currentPage:number
    users: UsersType[]
    unfollow:(userId: number) => void
    follow:(userId: number) => void
}

export const Users = (props:UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(page => {
                return <span onClick={()=> {props.onPageChange(page)}}
                             className={ props.currentPage === page ? styles.selectedPage : ''}>{page}</span>
            })}
        </div>
        {props.users.map(user => {
            return <div key={ user.id}>
                    <span>
                        <div >
                            <img className={styles.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt="" />
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={()=>{props.unfollow(user.id)}}>Unfollow</button>
                                : <button onClick={()=>{props.follow(user.id)}}>Follow</button>}
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
    </div> ;
}