
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type postsType = {
    post: string,
    id: string,
    likeCount: string
}

export type ActionProfileDispatchType = {
    type: string
    newPostText: string
}

type InitialProfileStateType = typeof initialState

const initialState = {
    posts: [
        {post: 'Hi', id: '1', likeCount: '10'},
        {post: 'Hi, how are you ?', id: '2', likeCount: '20'},
        {post: 'It\'s my first post?', id: '3', likeCount: '30'},
        {post: 'Hello', id: '4', likeCount: '40'},
        {post: 'qq', id: '5', likeCount: '50'},
    ] as postsType[],
    newPostText: '' as string
}

export const ProfileReducer = (state: InitialProfileStateType = initialState,
                               action: ActionProfileDispatchType): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                post: state.newPostText,
                id: '5',
                likeCount: '110',
            }
             return {...state,posts: [...state.posts,newPost],newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            if (action.newPostText) {
                return {...state,newPostText:action.newPostText }
            }
            return state
        default:
            return state
        }

};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    }
}
