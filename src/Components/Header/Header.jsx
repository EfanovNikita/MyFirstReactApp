import React, { useState } from 'react';
import style from './Header.module.css';
import { connect } from 'react-redux';
import { LogoutThunk } from '../../redux/authReducer';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    let logout = (e) => {
        props.LogoutThunk();
    };

    return (
        <div className={style.header}>
            {props.isAuth
                ? <div className={style.loginButton} onClick={logout}><button>Выйти</button></div>
                : <div className={style.loginButton}>
                    <NavLink to='/login'><button>Войти</button></NavLink></div>
            }
            <div className={style.menuBurger}>
                <div className={style.burger}></div>
                <div className={style.menuList}>
                    <NavLink to='/profile'><div>Мой профиль</div></NavLink>
                    <NavLink to='/users'><div>Пользователи</div></NavLink>
                    {props.isAuth
                        ? <NavLink to='/login' onClick={logout}><div>Выйти</div></NavLink>
                        : <NavLink to='/login'><div>Войти</div></NavLink>
                    }
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { LogoutThunk })(Header);