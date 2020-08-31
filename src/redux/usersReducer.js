import { userAPI } from "../api/api";

const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
    users: null,
    totalCount: null
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
        default: return state
    }
}

const setUsers = (users) => ({type: SET_USERS, users});
const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export const getUsersThunk = (page, friend, term) => {
    return (dispatch) => {
        userAPI.getUsers(page, friend, term).then(response => {
            let users = response.data.items;
            let totalCount = response.data.totalCount;
            dispatch(setUsers(users));
            dispatch(setTotalCount(totalCount));
        })
    }
}

export default usersReducer;