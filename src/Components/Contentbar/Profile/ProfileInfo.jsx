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
            <div className={style.gridElem}><img src={largePhoto} alt='avatar'></img></div>
            <div className={style.gridBox}>
                <div className={style.gridElem} ><p>Name</p></div>
                <div className={style.gridElem} ><p>{fullName}</p></div>
                <div className={style.gridElem} ><p>Статус</p></div>
                <div className={style.gridElem} ><ProfileStatus userId={props.profile.userId} /></div>
                <div className={style.gridElem} ><p>Vk</p></div>
                <div className={style.gridElem} ><p>{fullName}</p></div>
                <div className={style.gridElem} ><p>YouTube</p></div>
                <div className={style.gridElem} ><p>{fullName}</p></div>
            </div>
        </div>
    )
};

export default ProfileInfo;