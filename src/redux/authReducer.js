import { authAPI, securityAPI } from '../api/api';

const SET_USER = 'SET-USER';
const SET_IS_LOADING = 'SET-IS-LOADING';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';
const SET_ERROR_SUBMIT = 'SET-ERROR-SUBMIT';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: true,
    captchaURL: null,
    errorSubmit: null
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
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.url
            }
        case SET_ERROR_SUBMIT: 
            return {
                ...state,
                errorSubmit: action.error
            }
        default: return state
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER, userData: { userId, email, login }, isAuth });
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading });
export const setCaptchaUrl = (url) => ({ type: SET_CAPTCHA_URL, url });
export const setErrorSubmit = (error) =>({type: SET_ERROR_SUBMIT, error});

export const authUserThunk = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
            dispatch(setIsLoading(false));
        }).catch(error => {
            console.log(error);
        })
    }
};

export const LoginThunk = ({email, password, rememberMe, captcha}) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        authAPI.login(email, password, rememberMe, captcha).then(response => {
            if (response.data.resultCode === 0) {
                authAPI.me().then(response => {
                    if (response.data.resultCode === 0) {
                        let { id, email, login } = response.data.data;
                        dispatch(setAuthUserData(id, email, login, true));
                    }
                    dispatch(setIsLoading(false));
                }).catch(error => {
                    console.log(error);
                })
            } else if (response.data.resultCode === 10) {
                securityAPI.getCaptchaUrl().then(response => {
                    let captchaUrl = response.data.url;
                    dispatch(setCaptchaUrl(captchaUrl));
                    dispatch(setIsLoading(false));
                })
            } else {
                let err = response.data.messages;
                dispatch(setErrorSubmit(err));
            }
        }).catch(error => {
            console.log(error);
        })
    }
};

export const LogoutThunk = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
            dispatch(setIsLoading(false));
        }).catch(error => {
            console.log(error);
        })
    }
};

export default authReducer;