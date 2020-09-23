import React from 'react';
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
                ? <div className={style.loginButton} onClick={logout}><button>Log out</button></div>
                : <div className={style.loginButton}>
                    <NavLink to='/login'><button>Log in</button></NavLink></div>
            }
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { LogoutThunk })(Header);