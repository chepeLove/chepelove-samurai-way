import axios from "axios";


const instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{
        'API-KEY': '80355f25-1716-4bed-9c55-ae7d9e7587da'
    }
})

export const usersAPI = {
    getUsers(currentPage:number = 1,pageSize:number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data)
    },
    unfollow(id:number){
        return instance.delete(`follow/${id}`).then(res =>res.data)
    },
    follow(id:number){
        return instance.post(`follow/${id}`).then(res =>res.data)
    }
}

export const authAPI = {
    getMe(){
        return instance.get('auth/me').then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(userId:string){
        return instance.get(`profile/${userId}`)
    }
}
