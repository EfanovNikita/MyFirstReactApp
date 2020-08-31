import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getStatusThunk, setStatusThunk } from '../../../redux/profileReducer';

const ProfileStatus = (props) => {

    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    /*useEffect(() => {
        props.getStatusThunk(props.userId)
    }, [props.userId]);*/

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let onChangeStatus = (e) => {
        setStatus(e.target.value)
    };

    let offEditMode = (e) => {
        props.setStatusThunk(e.target.value);
        setEditMode(false);
    };

    let onEditMode = () => {
        setEditMode(true)
    };

    return (
        <div>
            {props.authId !== props.userId ? <div>{status}</div> :
                editMode ? 
                <input value={status} onChange={onChangeStatus} onBlur={offEditMode} autoFocus={true} ></input> :
                <div onDoubleClick={onEditMode}>{status || '-----'}</div>
            }
        </div>
    )
}

let mapStateToProps = (state) => ({
    status: state.profilePage.status,
    authId: state.auth.userId
})

export default connect(mapStateToProps, { getStatusThunk, setStatusThunk })(ProfileStatus);