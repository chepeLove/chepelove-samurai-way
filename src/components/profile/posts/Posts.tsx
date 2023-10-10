import React, {useRef} from 'react';
import {Post} from "./post/Post";
import {PostsType} from "./PostsContainer";

export const Posts = (props:PostsType) => {

        const newPostElement = useRef<HTMLTextAreaElement>(null)

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current !== null) {
           props.updateNewPost(newPostElement.current.value)
        }
    }
    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={onAddPost}>add post</button>
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