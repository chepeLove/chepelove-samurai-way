
import {ActionDispatchType, profileStateType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const ProfileReducer = (state:profileStateType,action:ActionDispatchType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                post: state.newPostText,
                id: '5',
                likeCount: '110',
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            if (action.newPostText != null) {
                state.newPostText = action.newPostText
            }
            break;
    }
    return state
};

export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (newPostText:string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText:newPostText
    }
}
