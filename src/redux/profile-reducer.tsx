
import {ActionDispatchType, profileStateType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts:[
        { post:'Hi', id:'1',likeCount:'10'},
        { post:'Hi, how are you ?', id:'2',likeCount:'20'},
        { post:'It\'s my first post?', id:'3',likeCount:'30'},
        { post:'Hello', id:'4',likeCount:'40'},
        { post:'qq', id:'5',likeCount:'50'},
    ],
    newPostText: ''
}

export const ProfileReducer = (state:profileStateType = initialState,action:ActionDispatchType) => {
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
