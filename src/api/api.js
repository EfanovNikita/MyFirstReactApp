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
    login(email, password, rememberMe=false, captcha='') {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
};

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    setProfile(alteredProfile) {
        return instance.put(`profile`, alteredProfile)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    setStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    setPhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData)
    }
};

export const userAPI = {
    getUsers(page, term, friend, count) {
        return instance.get(`users?page=${page}&count=${count}&term=${term}&friend=${friend}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}