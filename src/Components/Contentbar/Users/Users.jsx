import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersThunk, setFollowedThunk } from '../../../redux/usersReducer';
import User from './User';
import Paginator from './Paginator';
import Preloader from '../../Images/Preloader';

const Users = (props) => {

    let [page, setPage] = useState(1);
    let [users, setUsers] = useState([]);

    useEffect(() => {
        props.getUsersThunk(page);
    }, [page]);

    useEffect(() => {
        let users = [];
        if (props.users) {
            users = props.users.map((user) => {
                return <User id={user.id}
                    photo={user.photos.small}
                    name={user.name}
                    followed={user.followed}
                    setFollowedThunk={props.setFollowedThunk}
                    isSettingFollow={props.isSettingFollow}
                    isAuth={props.isAuth}
                    key={user.id + user.name} />
            })
        };
        setUsers(users);
    }, [props.users]);

    let onSetPage = (page) => {
        setPage(page);
    };

    if (props.users) {
        return (
            <div>
                <Paginator onSetPage={onSetPage}
                    totalCount={props.totalCount} currentPage={page} />
                {users}
            </div>
        )
    } else {
        return (
            <Preloader />
        )
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    isSettingFollow: state.usersPage.isSettingFollow,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getUsersThunk, setFollowedThunk })(Users);