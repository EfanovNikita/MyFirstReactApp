import React from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => {


    return (
        <div>
            <NavLink to={'/profile/' + props.id} >
                <img src={props.photo} alt='avatar'></img>
            </NavLink>
            <div>
                <div>{props.name}</div>
            </div>
        </div>
    )
}

export default User;