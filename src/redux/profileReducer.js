import { profileAPI } from "../api/api";

const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    profile: '',
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: {
                    ...action.profile,
                    contacts: { ...action.profile.contacts },
                    photos: { ...action.profile.photos }
                }
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default: return state
    }
};

export const setProfileData = (profile) => ({ type: SET_PROFILE, profile });
export const setStatusData = (status) => ({ type: SET_STATUS, status });

export const setProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            let profile = response.data;
            dispatch(setProfileData(profile))
        })
    }
};

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusData(response.data))
        })
    }
};

export const setStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusData(status))
            }
        })
    }
};

export default profileReducer;