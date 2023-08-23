import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {profileStateType} from "../../App";



type profilePropsType = {
    profileState:profileStateType
}

export const Profile = (props:profilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts ={props.profileState.posts} />
        </div>
    );
};

