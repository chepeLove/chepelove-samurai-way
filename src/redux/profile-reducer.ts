

export type postsType = {
    post: string,
    id: string,
    likeCount: string
}

export type ActionProfileDispatchType = AddPostActionCreatorType | UpdateNewPostActionCreator


type InitialProfileStateType = {
    posts:postsType[]
    newPostText:string
}

const initialState:InitialProfileStateType = {
    posts: [
        {post: 'Hi', id: '1', likeCount: '10'},
        {post: 'Hi, how are you ?', id: '2', likeCount: '20'},
        {post: 'It\'s my first post?', id: '3', likeCount: '30'},
        {post: 'Hello', id: '4', likeCount: '40'},
        {post: 'qq', id: '5', likeCount: '50'},
    ] ,
    newPostText: ''
}

export const ProfileReducer = (state: InitialProfileStateType = initialState,
                               action: ActionProfileDispatchType): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                post: state.newPostText,
                id: '5',
                likeCount: '110',
            }
             return {...state,posts: [...state.posts,newPost],newPostText: ''}
        case 'UPDATE-NEW-POST':
            if (action.payload.newPostText) {
                return {...state,newPostText:action.payload.newPostText }
            }
            return state
        default:
            return state
        }

};

type AddPostActionCreatorType = ReturnType<typeof addPost>

export const addPost = () => {
    return {
        type: 'ADD-POST'
    }as const
}

type UpdateNewPostActionCreator = ReturnType<typeof updateNewPost>


export const updateNewPost = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        payload:{
            newPostText
        }
    }as const
}
