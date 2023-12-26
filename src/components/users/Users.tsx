import styles from "./Users.module.css";
import userPhoto from "../../assets/avatar-user.png";
import React, {useEffect} from "react";
import {FilterUsersType, followTC, getUsersTC, unfollowTC} from "../../redux/users-reducer";
import {NavLink, useHistory} from "react-router-dom";
import {Paginator} from "../common/paginator/Paginator";
import {UserSearchForm} from "./UserSearchForm/UserSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount, getUsers,
    getUsersFilter
} from "../../redux/users-selectors";


export const  Users = () =>{

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)
    const dispatch=useDispatch()
    const history =  useHistory()


    useEffect(() => {
        dispatch(getUsersTC(currentPage,pageSize,filter))
    }, []);

    // useEffect(() => {
    //     history.push({pathname: '/users', search: `?term=${filter.term}&friend=${filter.friend}`})
    // }, [filter,currentPage]);

    const onPageChange = (page: number) => {
        dispatch(getUsersTC(page, pageSize,filter))
    }

    const onFilterChanged = (filter:FilterUsersType)=>{
        dispatch(getUsersTC(1,pageSize,filter))
    }

    const follow = (userId:number)=>{
        dispatch(followTC(userId))
    }
    const unfollow = (userId:number)=>{
        dispatch(unfollowTC(userId))
    }

    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChange={onPageChange}
                   currentPage={currentPage}
        />
        <UserSearchForm onFilterChanged={onFilterChanged} filter={filter}/>
        {users.map(user => {
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
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            unfollow(user.id)
                                        }}>Unfollow</button>
                                :
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            follow(user.id)
                                        }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
            </div>
        })}
    </div>;
}