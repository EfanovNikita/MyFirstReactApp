import { profileAPI } from "../api/api";

const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_PHOTOS = 'SET-PHOTOS';

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
        case SET_PHOTOS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default: return state
    }
};

export const setProfileData = (profile) => ({ type: SET_PROFILE, profile });
export const setStatusData = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SET_PHOTOS, photos });

export const setProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            let profile = response.data;
            dispatch(setProfileData(profile))
        }).catch(error => {
            console.log(error);
        })
    }
};

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusData(response.data))
        }).catch(error => {
            console.log(error);
        })
    }
};

export const setStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusData(status))
            }
        }).catch(error => {
            console.log(error);
        })
    }
};

export const setProfileChangeThunk = (profileChange) => {  
    return (dispatch, getState) => {
        let alteredProfile = {
            ...getState().profilePage.profile,
            ...profileChange
        };
        profileAPI.setProfile(alteredProfile).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileData(alteredProfile))
            } else {
                console.log(response.data)
            }
        }).catch(error => {
            console.log(error);
        })
    }
};

export const setPhotoThunk = (photoFile) => {
    return (dispatch) => {
        profileAPI.setPhoto(photoFile).then(response => {
            if (response.data.resultCode === 0) {
                let newPhotos = response.data.data.photos;
                dispatch(savePhotoSuccess(newPhotos));
            } else {
                console.log(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

export default profileReducer;