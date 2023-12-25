import axios from "axios";
import {ProfileDataType} from "../components/profile/profileInfo/profileData/ProfileDataForm";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '4a8ce333-aa09-498d-9736-2829a91f8995'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number, term: string = '', friend: null | boolean = null) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}` +
            (friend != null ? `&friend=${friend}` : ''))
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`).then(res => res.data)
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    }
}

export const authAPI = {
    getMe() {
        return instance.get<BaseResponseType<AuthMeType>>('auth/me').then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<BaseResponseType<{ userId: string }>>('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const securiryAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(newProfileData: ProfileDataType) {
        return instance.put(`profile`, newProfileData)
    }
}

//Types

type BaseResponseType<T> = {
    data: T
    resultCode: ResultCode
    messages: string[]
}

type AuthMeType = {
    id: string
    email: string
    login: string
}

export enum ResultCode {
    Success,
    Error,
    Captcha = 10
}