import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersThunk, setFollowedThunk } from '../../../redux/usersReducer';
import User from './User';
import Paginator from './Paginator';
import Preloader from '../../Images/Preloader';
import { withRouter } from 'react-router-dom';
import LoginHook from '../../Hooks/LoginHook';
import { compose } from 'redux';
import style from './Users.module.css';

const Users = (props) => {

    let [page, setPage] = useState(1);
    let [users, setUsers] = useState([]);
    let [options, setOptions] = useState('');
    let [term, setTerm] = useState('');

    useEffect(() => {
        props.getUsersThunk(page, term, options);
    }, [page, options, term]);

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

    let setOptionsUsers = (e) => {
        setOptions(e.target.value);
    };

    let onSetTerm = (e) => {
        let value = e.target.previousSibling.value;
        setTerm(value);
    }

    if (props.users) {
        return (
            <div>
                <div className={style.searchInput} >
                    <input type="search" name="search users" id="search users" />
                    <div className={style.searchButton} onClick={onSetTerm}></div>
                </div>
                <div className={style.radio}>
                    <label>
                        <input type="radio" name="options" value="true" onClick={setOptionsUsers} />
                        Только отслеживаемые
                    </label>
                    <label>
                        <input type="radio" name="options" value="false" onClick={setOptionsUsers} />
                        Только неотслеживаемые
                    </label>
                    <label>
                        <input type="radio" name="options" value="" defaultChecked onClick={setOptionsUsers} />
                        Все
                    </label>
                </div>
                {users}
                <Paginator onSetPage={onSetPage}
                    totalCount={props.totalCount} currentPage={page} />
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

export default compose(withRouter, LoginHook, connect(mapStateToProps, { getUsersThunk, setFollowedThunk }))(Users);