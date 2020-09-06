import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={style.nav}>

            <NavLink to='/profile' activeClassName={style.activeButton}>
                <div>Моя страница</div>
            </NavLink>

            <NavLink to='/users' activeClassName={style.activeButton}>
                <div>Пользователи</div>
            </NavLink>
        </div>
    )
}

export default Navbar;