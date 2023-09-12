import React, {useRef} from 'react';
import {Post} from "./post/Post";
import {postsType} from "../../../redux/state";

type postsPropsType = {
    posts:postsType[]
    addPost:() => void
    newPostText:string
    updateNewPostText:(newPostText:string) => void
}
export const Posts = (props:postsPropsType) => {

        const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
            props.addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current !== null) {
            props.updateNewPostText(newPostElement.current.value)
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