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


type ActionUsersDispatchType = FollowACType | UnfollowACType | SettUsersACType | SetCurrentPageACType
    | SetTotalUserCountACType

const initialState = {
    users: [] as UsersType[],
    pageSize:100,
    totalUsersCount: 1000,
    currentPage:1
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
            return {...state, users: action.payload.users}
        }
        case 'SET-CURRENT-PAGE':{
            return {...state,currentPage: action.payload.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT':{
            return {...state,totalUsersCount: action.payload.totalCount}
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

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const  setCurrentPageAC = (currentPage:number) =>{
    return {
        type: 'SET-CURRENT-PAGE' as const,
        payload:{
            currentPage
        }
    }
}

type SetTotalUserCountACType = ReturnType<typeof setTotalUserCountAC>

export const setTotalUserCountAC = (totalCount:number) => {
    return{
        type: 'SET-TOTAL-USERS-COUNT' as const,
        payload:{
            totalCount
        }
    }
}