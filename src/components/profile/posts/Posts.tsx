import React from 'react';
import {Post} from "./post/Post";
import {PostsType} from "./PostsContainer";
import {AddNewPostFormRedux, addPostFormType} from "./addPostForm/addNewPostForm";

export const Posts = (props:PostsType) => {

    const addPost = (value:addPostFormType) => {
        props.addPost(value.newPostText)
    }
    return (
        <div>
            My posts
            <AddNewPostFormRedux onSubmit={addPost}/>
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