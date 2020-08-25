import React, { useEffect } from 'react';
import { authUserThunk } from '../../../redux/authReducer';
import { connect } from 'react-redux';

const Profile = (props) => {
    props.authUserThunk();
    return (
        <div>
            {props.login}
            {props.email}
            {props.userId}
            {props.isAuth}
        </div>
    )
}

let mapStateToProps = (state) => ({
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, { authUserThunk } )(Profile)