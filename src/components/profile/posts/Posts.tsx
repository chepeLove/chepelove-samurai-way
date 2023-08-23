import React from 'react';
import {Post} from "./post/Post";
import {postsType} from "../../../App";

type postsPropsType = {
    posts:postsType[]
}
export const Posts = (props:postsPropsType) => {

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
            {props.posts.map((post)=>{
                return(
                    <Post post = {post.post} likeCount ={post.likeCount}/>
                )
            })}
        </div>
    );
};