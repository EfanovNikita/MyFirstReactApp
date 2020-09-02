import React, { useEffect, useState } from 'react';
import { setProfileThunk, getStatusThunk } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import LoginHook from '../../Hooks/LoginHook';

const Profile = React.memo((props) => {

    let [userId, setUserId] = useState(props.match.params.userId);

    useEffect(() => {
        if (props.match.params.userId) {
            setUserId(props.match.params.userId)
        } else {
            setUserId(props.authUserId)
        };
    }, [props.match.params.userId, props.authUserId]);

    useEffect(() => {
        if (userId && userId !== props.profile.userId) {
            props.setProfileThunk(userId)
            props.getStatusThunk(userId)
        }
    }, [userId]);

    return (
        <div>
            {!props.profile ? <p>Loading</p> : <ProfileInfo profile={props.profile} /> }
        </div>
    )
});

let mapStateToProps = (state) => ({
    authUserId: state.auth.userId,
    profile: state.profilePage.profile,
});


export default compose(withRouter, LoginHook, connect(mapStateToProps, { setProfileThunk, getStatusThunk }))(Profile)