import React, { useState, useEffect } from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

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
            <div className={style.photoBox}><img src={largePhoto} alt='avatar' className={style.photo}></img></div>
            <div className={style.gridBox}>
                <div className={style.gridElem} ><p>{fullName}</p></div>
                <div className={style.gridElem} ><p>Статус: <ProfileStatus userId={props.profile.userId} /></p></div>
                <div className={style.gridElem} ><p>Vk</p></div>
                <div className={style.gridElem} ><p>YouTube</p></div>
                <div className={style.gridElem} ><p>AboutMe</p></div>
            </div>
        </div>
    )
};

export default ProfileInfo;