import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '33535a47-115a-49b0-a0bc-a497e771ba13'
    }
});

export const authAPI = {
    me() {
        return instance.get('auth/me')      
    },
    login(email, password) {
        return instance.post('auth/login', {email, password})
    }
};

export const profileAPI = {
    getProfile(id) {
        return instance.get(`/profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`/profile/status/${id}`)
    },
    setStatus(status) {
        return instance.put(`/profile/status`, {status})
    }
};

export const userAPI = {
    getUsers(page, friend, term, count) {
        return instance.get(`users?page=${page}&count=${count}&friend=${friend}&term=${term}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}