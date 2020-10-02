import React, { useState, useEffect } from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileContacts from './ProfileContacts';
import avatar from '../../Images/avatar.svg';

const ProfileInfo = (props) => {

    let [largePhoto, setLargePhoto] = useState(props.profile.photos.large);

    useEffect(() => {
        setLargePhoto(props.profile.photos.large);
    }, [props.profile.photos.large]);

    const setNewPhoto = (e) => {
        if (e.target.files.length) {
            let photoFile = e.target.files[0];
            props.setPhotoThunk(photoFile);
        }
    }

    return (
        <div className={style.profileInfo}>
            <div className={style.photoBox}> 
                <div className={style.photo}>
                    <img src={largePhoto || avatar} alt='avatar' ></img>
                    {props.isOwner &&
                        <div>
                            <input id='changePhotoButton' type='file' className={style.changePhotoButton} onChange={setNewPhoto} />
                            <label htmlFor='changePhotoButton' className={style.label + ' ' + style.button}>Изменить фото</label>
                        </div>}
                </div>
            </div>
            <div className={style.infoBox}>
                <div><b>{props.profile.fullName}</b></div>
                <div><b>Статус: </b><ProfileStatus userId={props.profile.userId} /></div>
                <div>
                    <ProfileContacts profile={props.profile} isOwner={props.isOwner}
                        setProfileChange={props.setProfileChange} />
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;