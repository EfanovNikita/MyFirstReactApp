import { profileAPI } from "../api/api";

const SET_PROFILE = 'SET-PROFILE';

let initialState = {
    profile: '',
}

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
        default: return state
    }
}

export const setProfileData = (profile) => ({ type: SET_PROFILE, profile });

export const setProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            let profile = response.data;
            dispatch(setProfileData(profile))
        })
    }
}

export default profileReducer;