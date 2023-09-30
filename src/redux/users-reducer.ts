type UsersType = {
    id:number
    followed:boolean
    fullName:string
    status:string
    location: LocationType
}

type LocationType = {
    city:string
    county:string
}


export type InitialUsersStateType = {
    users:UsersType[]
}

type ActionUsersDispatchType = FollowACType | UnfollowACType

const initialState:InitialUsersStateType = {
    users:[
        {id:1, followed: false, fullName:'Dmitry',status:'I am a boss', location:{city:'Minsk',county:'Belarus'}},
        {id:2, followed: true, fullName:'Mark',status:'I am a box', location:{city:'Moscow',county:'Russia'}},
        {id:3, followed: false, fullName:'Kirill',status:'I am a superman', location:{city:'Kiev',county:'Ukraine'}},
    ]
}

export const UsersReducer = (state:InitialUsersStateType = initialState,action:ActionUsersDispatchType) => {

    switch (action.type){
        case 'FOLLOW':{
           return {...state,users:state.users.map(user => user.id === action.payload.userId ? {...user,followed:true} : user)}
        }
        case 'UNFOLLOW':{
            return {...state,users:state.users.map(user => user.id === action.payload.userId ? {...user,followed:false} : user)}

        }
        default:
            return state
    }
};


type FollowACType = ReturnType<typeof followAC>

export const followAC = (userId:number) => {
    return {
        type: 'FOLLOW',
        payload:{
            userId,
        }
    }
}

type UnfollowACType  = ReturnType<typeof unfollowAC>

export const unfollowAC = (userId:number) => {
    return {
        type: 'UNFOLLOW',
        payload:{
            userId,
        }
    }
}