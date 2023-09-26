import React from 'react';
import {ActionDispatchType, StateType, StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {Store} from "redux";
import {StoreContext} from "../../../StoreContext";

type PostsContainerType = {
    // store:Store<StateType,ActionDispatchType>
}



export const PostsContainer = (props:PostsContainerType) => {
    return (
        <StoreContext.Consumer>
            {(store:Store<StateType,ActionDispatchType>) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (newPostText:string) => {
                    let action = updateNewPostActionCreator(newPostText)
                    store.dispatch(action)
                }
                const state = store.getState()
            return <Posts posts={state.profileState.posts}
                   newPostText={state.profileState.newPostText}
                   updateNewPostText = {onPostChange}
                   addPost = {addPost}
            />
            }
        }
        </StoreContext.Consumer>

    );
};