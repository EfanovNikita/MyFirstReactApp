import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersThunk } from '../../../redux/usersReducer';
import User from './User';

const Users = (props) => {

    let [page, setPage] = useState(1);

    useEffect(() => {
        props.getUsersThunk(page);
        return () => { setPage(1) }
    }, [page]);

    let users = [];

    if (props.users) {
        users = props.users.map((user) => { return <User id={user.id} photo={user.photos.small} name={user.name} /> })
    }

    return (
        <div>
            {users}
        </div>
    )
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
})

export default connect(mapStateToProps, { getUsersThunk })(Users);