import React, {PureComponent} from 'react';
import {Post} from "./post/Post";
import {PostsType} from "./PostsContainer";
import {AddNewPostFormRedux, addPostFormType} from "./addPostForm/addNewPostForm";

export class Posts extends PureComponent<PostsType> {

    addPost = (value: addPostFormType) => {
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
                {this.props.posts.map((post) => {
                    return (
                        <Post key={post.id} post={post.post} likeCount={post.likeCount}/>
                    )
                })}
            </div>
        )
    };
}