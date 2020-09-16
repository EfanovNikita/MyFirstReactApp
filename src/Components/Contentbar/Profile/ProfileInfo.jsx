import React, { useState, useEffect } from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileContacts from './ProfileContacts';
import avatar from '../../Images/avatar.svg';

const ProfileInfo = (props) => {

    let [fullName, setFullName] = useState(props.profile.fullName);
    let [largePhoto, setLargePhoto] = useState(props.profile.photos.large);

    useEffect(() => {
        setFullName(props.profile.fullName);
    }, [props.profile.fullName]);

    useEffect(() => {
        setLargePhoto(props.profile.photos.large);
    }, [props.profile.photos.large]);

    return (
        <div className={style.profileInfo}>
            <div className={style.photoBox}>
                <img src={largePhoto || avatar} alt='avatar' className={style.photo}></img>
            </div>
            <div className={style.gridBox}>
                <div className={style.gridElem} ><b>{fullName}</b></div>
                <div className={style.gridElem} >Статус: <ProfileStatus userId={props.profile.userId} /></div>
                <div className={style.gridElem} >
                    <ProfileContacts profile={props.profile} isOwner={props.isOwner}
                        setProfileChange={props.setProfileChange} />
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;