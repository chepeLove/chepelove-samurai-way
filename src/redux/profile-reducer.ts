

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
        case 'UPDATE-NEW-POST-TEXT':
            if (action.payload.newPostText) {
                return {...state,newPostText:action.payload.newPostText }
            }
            return state
        default:
            return state
        }

};

type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }as const
}

type UpdateNewPostActionCreator = ReturnType<typeof updateNewPostActionCreator>


export const updateNewPostActionCreator = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload:{
            newPostText: newPostText
        }
    }as const
}
