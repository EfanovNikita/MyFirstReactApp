import React, { useState } from 'react';
import { useFormik } from 'formik';
import style from './ProfileInfo.module.css';

const ProfileContacts = ({ profile }) => {
    return (
        <div>
            <div><b>Обо мне:</b> {profile.aboutMe}</div>
            <div><b>В поисках работы:</b> {profile.lookingForAJob ? 'Да' : 'Нет'}</div>
            <div><b>Мои навыки:</b> {profile.lookingForAJobDescription} </div>
            <div><b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.contacts}><p><b>{key}:   </b><a href={profile.contacts[key]}>{profile.contacts[key] || '------'}</a></p></div>
            })}
            </div>
        </div>
    )
}

const ProfileContactsForm = ({ profile, setEditMode, setProfileChange }) => {

    const formik = useFormik({
        initialValues: {
            aboutMe: profile.aboutMe || '------',
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription || '------',
            contacts: {
                facebook: profile.contacts.facebook,
                website: profile.contacts.website,
                vk: profile.contacts.vk,
                twitter: profile.contacts.twitter,
                instagram: profile.contacts.instagram,
                youtube: profile.contacts.youtube,
                github: profile.contacts.github,
                mainLink: profile.contacts.mainLink,
            }
        },
        onSubmit: values => {
            setEditMode(false);
            setProfileChange(values);
        }
    });

    const onChangeRadio = (e) => {
        if (e.target.value === 'Да') {
            formik.values[e.target.name] = true;
        } else if (e.target.value === 'Нет') {
            formik.values[e.target.name] = false;
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='aboutMe'><b>Обо мне: </b></label>
                <input
                    type='text'
                    id='aboutMe'
                    name='aboutMe'
                    value={formik.aboutMe}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div>
                <label htmlFor='lookingForAJob'><b>В поисках работы: </b></label>
                <input
                    type='radio'
                    id='lookingForAJob'
                    name='lookingForAJob'
                    value='Да'
                    onChange={onChangeRadio}
                    defaultChecked={formik.values.lookingForAJob}
                ></input> да
                <input
                    type='radio'
                    id='lookingForAJob'
                    name='lookingForAJob'
                    value='Нет'
                    onChange={onChangeRadio}
                    defaultChecked={!formik.values.lookingForAJob}
                ></input> нет
            </div>

            <div>
                <label htmlFor='lookingForAJobDescription'><b>Мои навыки: </b></label>
                <input
                    id='lookingForAJobDescription'
                    name='lookingForAJobDescription'
                    type='textarea'
                    value={profile.lookingForAJobDescription}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div>
                <b>Контакты:</b>
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={style.contacts}>
                            <p>
                                <label htmlFor={`contacts.${key}`}><b>{key}: </b></label>
                                <input
                                    id={`contacts.${key}`}
                                    name={`contacts.${key}`}
                                    type='text'
                                    value={formik.values.contacts[key]}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </p>
                        </div>
                    )
                })}
            </div>
            <button type='submit' className={style.button}>Сохранить</button>
        </form>
    )
}

const ContactsContainer = ({ profile, isOwner, setProfileChange }) => {

    let [isEditMode, setEditMode] = useState(false);

    return (
        <div>
            {!isOwner ? <ProfileContacts profile={profile} />
                : isEditMode ? <ProfileContactsForm profile={profile} setEditMode={setEditMode} setProfileChange={setProfileChange} />
                    : <ProfileContacts profile={profile} />}
            {!isEditMode && isOwner ? <button onClick={() => { setEditMode(true) }} className={style.button}>Редактировать</button> : null}
        </div>
    )
}

export default ContactsContainer;