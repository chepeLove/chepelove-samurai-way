export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string
    followed: boolean
}


export type InitialUsersStateType = typeof initialState


type ActionUsersDispatchType = FollowACType | UnfollowACType | SettUsersACType

const initialState = {
    users: [
        // {
        //     name: "sergei026",
        //     id: 30107,
        //     uniqueUrlName: null,
        //     photos: {
        //         small: null,
        //         large: null
        //     },
        //     status: null,
        //     followed: false
        // },
        // {
        //     name: "eLukas21",
        //     id: 30106,
        //     uniqueUrlName: null,
        //     photos: {
        //         small: null,
        //         large: null
        //     },
        //     status: null,
        //     followed: false
        // },
        // {
        //     name: "ilik",
        //     id: 30105,
        //     uniqueUrlName: null,
        //     photos: {
        //         small: "https://social-network.samuraijs.com/activecontent/images/users/30105/user-small.jpg?v=1",
        //         large: "https://social-network.samuraijs.com/activecontent/images/users/30105/user.jpg?v=1"
        //     },
        //     status: null,
        //     followed: false
        // },
    ] as UsersType[]
}

export const UsersReducer = (state: InitialUsersStateType = initialState, action: ActionUsersDispatchType) => {

    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: true} : user)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: false} : user)
            }

        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default:
            return state
    }
};


type FollowACType = ReturnType<typeof followAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId,
        }
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId,
        }
    } as const
}

type SettUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}