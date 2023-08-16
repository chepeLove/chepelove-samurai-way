import React from 'react';
import style from './Profile.module.css'
import {Posts} from "./posts/Posts";
export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://www.seekpng.com/png/detail/268-2682643_image-illustrating-a-social-media-network-social-media.png'/>
            </div>
            <div>
                ava + descriptions
            </div>
            <Posts/>
        </div>
    );
};

