import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/avatar-user.png";
import axios from "axios";
import {UsersComponentType} from "./UsersContainer";
export class Users extends React.Component<UsersComponentType>{

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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

        return  <div>
            <div>
                {pages.map(page => {
                   return <button onClick={()=> {this.onPageChange(page)}}
                                  className={ this.props.currentPage === page ? styles.selectedPage : ''}>{page}</button>
                })}
            </div>
            {this.props.users.map(user => {
                return <div key={ user.id}>
                    <span>
                        <div >
                            <img className={styles.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt="" />
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={()=>{this.props.unfollow(user.id)}}>Unfollow</button>
                                : <button onClick={()=>{this.props.follow(user.id)}}>Follow</button>}
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
}