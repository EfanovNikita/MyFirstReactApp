import { authAPI } from '../api/api';

const SET_USER = 'SET-USER';

let initialState = {
    userId: 1,
    email: 1,
    login: 1,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.userData,
                isAuth: action.auth
            }
        default: return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER, userData: { userId, email, login }, isAuth });

export const authUserThunk = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        })
    }
}

export default authReducer;