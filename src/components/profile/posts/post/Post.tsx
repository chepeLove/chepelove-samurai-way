import React from 'react';
import style from './Post.module.css'

type postPropsType = {
    post:string
    likeCount: string
}

export const Post = (props:postPropsType) => {
    return (
        <div className={style.item}>
            <img src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg" alt="avatar"/>
            <div>{props.post}</div>
            <span>like: {props.likeCount}</span>
        </div>
    );
};

