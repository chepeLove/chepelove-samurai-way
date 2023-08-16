import React from 'react';
import {Post} from "./post/Post";


export const Posts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
                New posts
            </div>
            <Post message = {'Hi, how are you ?'} likeCount ={10}/>
            <Post message = {"It's my first post"} likeCount ={20}/>
        </div>
    );
};