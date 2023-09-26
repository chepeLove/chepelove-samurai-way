import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionDispatchType, StateType} from "../../redux/store";
import {PostsContainer} from "./posts/PostsContainer";
import {Store} from "redux";


type profilePropsType = {
}

export const Profile = (props: profilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    );
};

