import React, { useEffect, useState } from 'react';
import { setProfileThunk } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const Profile = React.memo((props) => {

    let [userId, setUserId] = useState(props.userId);

    useEffect(() => {
        if (userId && userId !== props.profile.userId) {
            props.setProfileThunk(userId)
        }
    }, [userId]);

    useEffect(() => {
        if (props.match.params.userId) {
            setUserId(props.match.params.userId)
        } else {
            setUserId(props.userId)
        };
    }, [props.match.params.userId, props.userId])

    return (
        <div>
            {!props.profile ? <p>Loading</p> : <ProfileInfo profile={props.profile} /> }
        </div>
    )
});

let mapStateToProps = (state) => ({
    userId: state.auth.userId,
    profile: state.profilePage.profile,
});


export default compose(withRouter, connect(mapStateToProps, { setProfileThunk }))(Profile)