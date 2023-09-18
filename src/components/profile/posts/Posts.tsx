import React, {useRef} from 'react';
import {Post} from "./post/Post";
import {ActionDispatchType, addPostActionCreator, postsType, updateNewPostActionCreator} from "../../../redux/state";

type postsPropsType = {
    posts:postsType[]
    newPostText:string
    dispatch:(action:ActionDispatchType)=>void
}



export const Posts = (props:postsPropsType) => {

        const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
            props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        if (newPostElement.current !== null) {
            let action = updateNewPostActionCreator(newPostElement.current.value)
            props.dispatch(action)
        }
    }
    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
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