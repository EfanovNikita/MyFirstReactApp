import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={style.nav}>

            <NavLink to='/profile' activeClassName={style.activeButton}>
                <div>Моя страница</div>
            </NavLink>

            <NavLink to='/users' activeClassName={style.activeButton}>
                <div>Пользователи</div>
            </NavLink>
        </nav>
    )
}

export default Navbar;