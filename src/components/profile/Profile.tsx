import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {profileStateType} from "../../redux/state";




type profilePropsType = {
    profileState:profileStateType
    addPost:() => void
    updateNewPostText:(newPostText:string) => void
}

export const Profile = (props:profilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts ={props.profileState.posts}
                   addPost={props.addPost}
                   newPostText={props.profileState.newPostText}
                   updateNewPostText = {props.updateNewPostText}
            />
        </div>
    );
};

