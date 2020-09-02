import React from 'react';
import { useFormik } from 'formik';
import { LoginThunk } from '../../redux/authReducer';
import validator from '../../validators/validatorLogin';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validator,
        onSubmit: values => {
            props.LoginThunk(values)
        }
    });

    if (props.isAuth && !props.isLoading) {
        return <Redirect to='/profile' />
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input 
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor='password'>Password</label>
            <input 
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <button type='submit'>Submit</button>
        </form>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading
})

export default connect(mapStateToProps, { LoginThunk })(Login);
