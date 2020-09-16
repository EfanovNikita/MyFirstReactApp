import React, { useEffect, useState } from 'react';
import { setProfileThunk, getStatusThunk, setProfileChangeThunk } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import LoginHook from '../../Hooks/LoginHook';
import Preloader from '../../Images/Preloader';

const Profile = React.memo((props) => {

    let [userId, setUserId] = useState(props.match.params.userId);
    let [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        if (props.match.params.userId) {
            setUserId(props.match.params.userId);
            setIsOwner(false);
        } else {
            setUserId(props.authUserId);
            setIsOwner(true);
        };
    }, [props.match.params.userId, props.authUserId]);

    useEffect(() => {
        if (userId && userId !== props.profile.userId) {
            props.setProfileThunk(userId);
            props.getStatusThunk(userId);
        }
    }, [userId]);

    return (
        <div>
            {!props.profile
                ? <Preloader />
                : <ProfileInfo profile={props.profile} isOwner={isOwner}
                    setProfileChange={props.setProfileChangeThunk} />}
        </div>
    )
});

let mapStateToProps = (state) => ({
    authUserId: state.auth.userId,
    profile: state.profilePage.profile,
});

export default compose(withRouter, LoginHook,
    connect(mapStateToProps, { setProfileThunk, getStatusThunk, setProfileChangeThunk }))(Profile)