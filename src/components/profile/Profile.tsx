import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfileType = {
    profile:UserProfileType | null
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <PostsContainer/>
        </div>
    );
};

