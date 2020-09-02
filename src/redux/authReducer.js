import { authAPI } from '../api/api';

const SET_USER = 'SET-USER';
const SET_IS_LOADING = 'SET-IS-LOADING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth
            }
        case SET_IS_LOADING: 
            return {
                ...state,
                isLoading: action.isLoading
            }
        default: return state
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER, userData: { userId, email, login }, isAuth });
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading });

export const authUserThunk = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
            dispatch(setIsLoading(false));
        })
    }
};

export const LoginThunk = ({email, password}) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        authAPI.login(email, password).then(response => {
            if (response.data.resultCode === 0) {
                authAPI.me().then(response => {
                    if (response.data.resultCode === 0) {
                        let { id, email, login } = response.data.data;
                        dispatch(setAuthUserData(id, email, login, true));
                    }
                    dispatch(setIsLoading(false));
                })
            }
        })
    }
}

export default authReducer;