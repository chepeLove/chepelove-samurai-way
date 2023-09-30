import React from 'react';
import {UsersComponentType} from "./UsersContainer";
import styles from './Users.module.css'

export const Users = (props:UsersComponentType) => {


    if(props.users.length === 0){
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://www.clipartmax.com/png/middle/16-162621_user-avatar-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B4%D0%BB%D1%8F-windows-10.png',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {
                    city: 'Minsk',
                    county: 'Belarus'
                }
            },
            {
                id: 2,
                photoUrl: 'https://www.clipartmax.com/png/middle/16-162621_user-avatar-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B4%D0%BB%D1%8F-windows-10.png',
                followed: true,
                fullName: 'Mark',
                status: 'I am a box',
                location: {
                    city: 'Moscow',
                    county: 'Russia'
                }
            },
            {
                id: 3,
                photoUrl: 'https://www.clipartmax.com/png/middle/16-162621_user-avatar-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B4%D0%BB%D1%8F-windows-10.png',
                followed: false,
                fullName: 'Kirill',
                status: 'I am a superman',
                location: {
                    city: 'Kiev',
                    county: 'Ukraine'
                }
            },
        ])
    }

    return (
        <div>
            {props.users.map(user => {
                return <div key={ user.id}>
                    <span>
                        <div >
                            <img className={styles.userPhoto} src={user.photoUrl} alt="" />
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={()=>{props.unfollow(user.id)}}>Unfollow</button>
                                : <button onClick={()=>{props.follow(user.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                             <div>{user.location.county}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
    );
};
