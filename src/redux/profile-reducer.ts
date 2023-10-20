export type postsType = {
    post: string,
    id: string,
    likeCount: string
}

export type UserProfileType = {
    "aboutMe": string | null,
    "contacts": {
        "facebook": string | null,
        "website": string | null,
        "vk": string | null,
        "twitter": string | null,
        "instagram": string | null,
        "youtube": string | null,
        "github": string | null,
        "mainLink": string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null,
    "fullName": string | null,
    "userId": number,
    "photos": {
        "small": string | null,
        "large": string | null
    }
}

export type ProfileActionsType = AddPostActionCreatorType | UpdateNewPostActionCreator | SetUserProfileType


export type InitialProfileStateType = {
    posts: postsType[]
    newPostText: string
    profile:null | UserProfileType
}

const initialState: InitialProfileStateType = {
    posts: [
        {post: 'Hi', id: '1', likeCount: '10'},
        {post: 'Hi, how are you ?', id: '2', likeCount: '20'},
        {post: 'It\'s my first post?', id: '3', likeCount: '30'},
        {post: 'Hello', id: '4', likeCount: '40'},
        {post: 'qq', id: '5', likeCount: '50'},
    ],
    newPostText: '',
    profile:null
}

export const ProfileReducer = (state: InitialProfileStateType = initialState,
                               action: ProfileActionsType): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                post: state.newPostText,
                id: '5',
                likeCount: '110',
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'UPDATE-NEW-POST':
            if (action.payload.newPostText) {
                return {...state, newPostText: action.payload.newPostText}
            }
            return state
        case 'SET-USER-PROFILE': {
            return {...state,profile:action.payload.profile}
        }
        default:
            return state
    }

};

type AddPostActionCreatorType = ReturnType<typeof addPost>

export const addPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}

type UpdateNewPostActionCreator = ReturnType<typeof updateNewPost>


export const updateNewPost = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        payload: {
            newPostText
        }
    } as const
}

type SetUserProfileType = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: 'SET-USER-PROFILE' as const,
        payload: {
            profile
        }
    }
}
