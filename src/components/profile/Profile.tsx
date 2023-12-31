import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {ProfileDataType} from "./profileInfo/profileData/ProfileDataForm";

type ProfileType = {
    profile:UserProfileType | null
    status:string
    updateUserStatus: (status:string) => void
    isOwner:boolean
    savePhoto:(photo:File) => void
    saveProfile: (newProfileData: ProfileDataType) => Promise<UserProfileType>
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}
                         status={props.status}
                         updateUserStatus = {props.updateUserStatus}
                         isOwner={props.isOwner}
                         savePhoto = {props.savePhoto}
                         saveProfile = {props.saveProfile}
            />
            <PostsContainer/>
        </div>
    );
};

