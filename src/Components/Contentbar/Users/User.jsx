import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

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
        <div>
            <NavLink to={'/profile/' + props.id} >
                <img src={props.photo} alt='avatar'></img>
            </NavLink>
            <div>
                <div>{props.name}</div>
            </div>
            {props.followed ?
                <button onClick={unfollow} disabled={followProgress} >Unfollow</button> :
                <button onClick={follow} disabled={followProgress} >Follow</button>
            }
        </div>
    )
}

export default User;