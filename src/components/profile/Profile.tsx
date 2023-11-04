import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfileType = {
    profile:UserProfileType | null
    status:string
    updateUserStatus: (status:string) => void
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}
                         status={props.status}
                         updateUserStatus = {props.updateUserStatus}
            />
            <PostsContainer/>
        </div>
    );
};

