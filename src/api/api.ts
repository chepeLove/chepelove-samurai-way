import axios from "axios";


const instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{
        'API-KEY': '4a8ce333-aa09-498d-9736-2829a91f8995'
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
    },
    getProfile(userId:string){
        return profileAPI.getProfile(userId)
    }
}

export const authAPI = {
    getMe(){
        return instance.get('auth/me').then(res => res.data)
    },
    login(email:string,password:string,rememberMe:boolean = false){
        return instance.post('auth/login',{email,password,rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getProfile(userId:string){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`/profile/status`,{status:status})
    }
}
