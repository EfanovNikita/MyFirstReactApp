import React from 'react';
import { useFormik } from 'formik';
import { LoginThunk } from '../../redux/authReducer';
import validate from '../../validators/validatorLogin';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import style from './Login.module.css';

const Login = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            props.LoginThunk(values)
        }
    });

    if (props.isAuth && !props.isLoading) {
        return <Redirect to='/profile' />
    };

    return (
        <form onSubmit={formik.handleSubmit} className={style.gridBox}>
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email
                ? <div className={style.error}>{formik.errors.email}</div>
                : <div></div>}
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password
                ? <div className={style.error}>{formik.errors.password}</div>
                : <div></div>}
            <button type='submit'>Войти</button>
        </form>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading
})

export default connect(mapStateToProps, { LoginThunk })(Login);
