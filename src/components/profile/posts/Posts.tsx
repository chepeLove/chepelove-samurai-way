import React from 'react';
import {Post} from "./post/Post";
import {PostsType} from "./PostsContainer";
import {AddNewPostFormRedux, addPostFormType} from "./addPostForm/addNewPostForm";

export class Posts extends React.Component<PostsType>{

    shouldComponentUpdate(nextProps: Readonly<PostsType>, nextState: Readonly<{}>): boolean {
    return nextProps != this.props || nextProps != this.state
    }

    addPost = (value:addPostFormType) => {
        this.props.addPost(value.newPostText)
    }
    render() {
        return (
        <div>
            My posts
            <AddNewPostFormRedux onSubmit={this.addPost}/>
            <div>
                New posts
            </div>
            {this.props.posts.map((post)=>{
                return(
                    <Post post = {post.post} likeCount ={post.likeCount}/>
                )
            })}
        </div>
    )
    };
};