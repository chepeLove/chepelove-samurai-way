import {usersAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

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


export type UsersActionsType = FollowACType | UnfollowACType | SettUsersACType | SetCurrentPageACType
    | SetTotalUserCountACType | ToggleIsFetchingACType | toggleFollowingProgressACType

const initialState = {
    users: [ ] as UsersType[],
    pageSize:100,
    totalUsersCount: 1000,
    currentPage:1,
    isFetching:true,
    followingInProgress:[] as number[]
}

export const UsersReducer = (state: InitialUsersStateType = initialState, action: UsersActionsType) => {

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
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':{
            return {...state,followingInProgress: action.payload.followingProgress ?
                    [...state.followingInProgress,action.payload.userId]
                    : state.followingInProgress.filter(id => id != action.payload.userId )
            }
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
        type: 'UNFOLLOW' as const,
        payload: {
            userId,
        }
    }
}

type SettUsersACType = ReturnType<typeof setUsers>

export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET-USERS' as const,
        payload: {
            users
        }
    }
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

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching:boolean)=>{
    return {
        type: 'TOGGLE-IS-FETCHING' as const ,
        payload:{
            isFetching
        }
    }
}

type toggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress= (followingProgress:boolean,userId:number)=>{
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS' as const ,
        payload:{
            followingProgress,
            userId
        }
    }
}

export const getUsersTC = (currentPage:number, pageSize:number):AppThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage,pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUserCount(response.totalCount))
        });
    }
}
export const unfollowTC = (userId:number):AppThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        usersAPI.unfollow(userId).then(response => {
            if(response.resultCode === 0){
                dispatch(unfollow(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
    })
}
}
export const followTC = (userId:number):AppThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        usersAPI.follow(userId).then(response => {
            if(response.resultCode === 0){
                dispatch(follow(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
    })
}
}

