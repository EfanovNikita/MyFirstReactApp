import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={style.nav}>
            <div>
                <NavLink to='/profile' activeClassName={style.activeButton}>
                    Моя страница
                </NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={style.activeButton}>
                    Пользователи
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;