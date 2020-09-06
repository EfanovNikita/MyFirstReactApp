import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import avatar from '../../Images/avatar.svg';
import style from './Users.module.css';

const User = (props) => {

    let [followProgress, setFollowProgress] = useState(false);

    useEffect(() => {
        setFollowProgress(false);
    }, [props.followed])

    let follow = () => {
        setFollowProgress(true);
        props.setFollowedThunk(true, props.id)
    };

    let unfollow = () => {
        setFollowProgress(true);
        props.setFollowedThunk(false, props.id)
    };

    return (
        <div className={style.userGrid}>
            <div className={style.userElem}>
                <NavLink to={'/profile/' + props.id} >
                    {props.photo !== null ?
                        <img src={props.photo} alt='avatar' className={style.avatar}></img> :
                        <img src={avatar} alt='avatar' className={style.avatar}></img>}
                </NavLink>
                <div >
                    {props.followed ?
                        <button className={style.followButton} onClick={unfollow} disabled={followProgress} >Unfollow</button> :
                        <button className={style.followButton} onClick={follow} disabled={followProgress} >Follow</button>
                    }
                </div>
            </div>
            <div className={style.userElem}>
                <div>{props.name}</div>
            </div>
        </div>
    )
}

export default User;