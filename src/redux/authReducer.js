import { authAPI } from '../api/api';

const SET_USER = 'SET-USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
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
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}

export default authReducer;