import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={style.nav}>

            <NavLink to='/profile' activeClassName={style.activeButton}>
                <span className={`entypo-users ${style.icon}`}></span>
                Мой профиль
            </NavLink>

            <NavLink to='/users' activeClassName={style.activeButton}>
                <span className={`entypo-users ${style.icon}`}></span>
                Пользователи
            </NavLink>
        </nav>
    )
}

export default Navbar;