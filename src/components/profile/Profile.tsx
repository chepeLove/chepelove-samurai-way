import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionDispatchType, profileStateType} from "../../redux/state";




type profilePropsType = {
    profileState:profileStateType
    dispatch:(action:ActionDispatchType)=>void
}

export const Profile = (props:profilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts ={props.profileState.posts}
                   dispatch={props.dispatch}
                   newPostText={props.profileState.newPostText}
            />
        </div>
    );
};

