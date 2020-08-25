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
    }
}