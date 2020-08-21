import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={style.nav}>
            <div className={style.blockButtons}>
                <NavLink to='/profile' activeClassName={style.activeButton}>
                    <div className={style.button}>A</div>
                </NavLink>
                <NavLink to='/users' activeClassName={style.activeButton}>
                    <div className={style.button}>B</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;