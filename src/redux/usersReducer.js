import { userAPI } from "../api/api";

const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_FOLLOW = 'SET-FOLLOW';

let initialState = {
    users: null,
    totalCount: null,
};

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_FOLLOW:
            return {
                ...state,
                users: state.users.map(item => { 
                    if (item.id === action.userId) {
                        item.followed = action.follow;
                        return item
                    } else {
                        return item
                    }})
            }
        default: return state
    }
};

const setUsers = (users) => ({type: SET_USERS, users});
const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
const setFollowed = (follow, userId) => ({type: SET_FOLLOW, follow, userId});

export const getUsersThunk = (page, friend=false, term='',count=10) => {
    return (dispatch) => {
        userAPI.getUsers(page, friend, term, count).then(response => {
            let users = response.data.items;
            let totalCount = response.data.totalCount;
            dispatch(setUsers(users));
            dispatch(setTotalCount(totalCount));
        }).catch(error => {
            console.log(error);
        })
    }
};

export const setFollowedThunk = (follow, userId) => {
    return (dispatch) => {
        if (follow) {
            userAPI.follow(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setFollowed(true, userId))
                }
            }).catch(error => {
                console.log(error);
            })
        } else {
            userAPI.unfollow(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setFollowed(false, userId))
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }
};

export default usersReducer;