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
    | SetTotalUserCountACType | toggleIsFetchingACType

const initialState = {
    users: [ ] as UsersType[],
    pageSize:100,
    totalUsersCount: 1000,
    currentPage:1,
    isFetching:true
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
        case 'TOGGLE-IS-FETCHING':{
            return {...state,isFetching: action.payload.isFetching}
        }
        default:
            return state
    }
};


type FollowACType = ReturnType<typeof follow>

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId,
        }
    } as const
}

type UnfollowACType = ReturnType<typeof unfollow>

export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId,
        }
    } as const
}

type SettUsersACType = ReturnType<typeof setUsers>

export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPage>

export const  setCurrentPage = (currentPage:number) =>{
    return {
        type: 'SET-CURRENT-PAGE' as const,
        payload:{
            currentPage
        }
    }
}

type SetTotalUserCountACType = ReturnType<typeof setTotalUserCount>

export const setTotalUserCount = (totalCount:number) => {
    return{
        type: 'SET-TOTAL-USERS-COUNT' as const,
        payload:{
            totalCount
        }
    }
}

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching:boolean)=>{
    return {
        type: 'TOGGLE-IS-FETCHING' as const ,
        payload:{
            isFetching
        }
    }
}