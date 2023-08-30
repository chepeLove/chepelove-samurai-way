import React, {useRef} from 'react';
import {Post} from "./post/Post";
import {postsType} from "../../../App";

type postsPropsType = {
    posts:postsType[]
    addPost:(postMessage: string) => void
}
export const Posts = (props:postsPropsType) => {

        const newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostEl.current !== null) {
            props.addPost(newPostEl.current.value)
            newPostEl.current.value = ''
        }
    }
    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostEl}></textarea>
                <button onClick={addPost}>add post</button>
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