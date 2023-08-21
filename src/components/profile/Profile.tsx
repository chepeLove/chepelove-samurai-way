import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Posts/>
        </div>
    );
};

