import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {profileStateType} from "../../App";



type profilePropsType = {
    profileState:profileStateType
    addPost:(postMessage: string) => void
}

export const Profile = (props:profilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts ={props.profileState.posts} addPost={props.addPost}/>
        </div>
    );
};

