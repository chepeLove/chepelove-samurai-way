import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    );
};

