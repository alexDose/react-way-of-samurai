import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "1d8091bb-c776-4a5c-8eac-9bbacc2102bb"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number): Promise<any> {
       return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}