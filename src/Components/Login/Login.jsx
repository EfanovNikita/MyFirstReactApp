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
            password: '',
            captcha: ''
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
            {props.captchaURL && <img src={props.captchaURL} alt='captcha' />}
            {props.captchaURL &&
                <input id='captcha' name='captcha' type='text' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.captcha}
                />
            }
            <button type='submit'>Войти</button>
            {props.errorSubmit && <div className={style.error} >{props.errorSubmit}</div>}
        </form>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    captchaURL: state.auth.captchaURL,
    errorSubmit: state.auth.errorSubmit
})

export default connect(mapStateToProps, { LoginThunk })(Login);
