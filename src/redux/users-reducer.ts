export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
    photoUrl: string
}

type LocationType = {
    city: string
    county: string
}


export type InitialUsersStateType = typeof initialState


type ActionUsersDispatchType = FollowACType | UnfollowACType | SettUsersACType

const initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://www.clipartmax.com/png/middle/16-162621_user-avatar-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B4%D0%BB%D1%8F-windows-10.png',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {
                city: 'Minsk',
                county: 'Belarus'
            }
        },
        {
            id: 2,
            photoUrl: 'https://www.clipartmax.com/png/middle/16-162621_user-avatar-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B4%D0%BB%D1%8F-windows-10.png',
            followed: true,
            fullName: 'Mark',
            status: 'I am a box',
            location: {
                city: 'Moscow',
                county: 'Russia'
            }
        },
        {
            id: 3,
            photoUrl: 'https://www.clipartmax.com/png/middle/16-162621_user-avatar-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B4%D0%BB%D1%8F-windows-10.png',
            followed: false,
            fullName: 'Kirill',
            status: 'I am a superman',
            location: {
                city: 'Kiev',
                county: 'Ukraine'
            }
        },
    ]
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