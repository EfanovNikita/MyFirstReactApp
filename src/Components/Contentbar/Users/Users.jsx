import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersThunk } from '../../../redux/usersReducer';
import User from './User';
import Paginator from './Paginator';

const Users = (props) => {


    let [page, setPage] = useState(1);
    let [users, setUsers] = useState([]);

    useEffect(() => {
        props.getUsersThunk(page);
    }, [page]);

    useEffect(() => {
        let users =[];
        if (props.users) {
            users = props.users.map((user) => { return <User id={user.id} photo={user.photos.small} name={user.name} key={user.id} /> })
        };
        setUsers(users);
    }, [props.users]);

    /*let users = [];

    if (props.users) {
        users = props.users.map((user) => { return <User id={user.id} photo={user.photos.small} name={user.name} /> })
    }*/

    let onSetPage = (page) => {
        setPage(page);
    };

    return (
        <div>
            <Paginator onSetPage={onSetPage} totalCount={props.totalCount} />
            {users}
        </div>
    )
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
})

export default connect(mapStateToProps, { getUsersThunk })(Users);