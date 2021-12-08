import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
                <NavLink to={'/profile/' + props.id} className={style.photoBox}>
                    <img src={props.photo !== null ? props.photo : avatar} 
                        alt='avatar' className={style.avatar} />
                </NavLink>
                <div >
                    {props.isAuth ? 
                        <button className={style.followButton} 
                            onClick={props.followed ? unfollow : follow} 
                            disabled={followProgress} >
                                {props.followed ? 'Unfollow' : 'Follow'}
                        </button> :
                        null
                    }
                </div>
            </div>
            <div className={style.userElem}>
                <NavLink to={'/profile/' + props.id} className={style.username}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}

export default User;