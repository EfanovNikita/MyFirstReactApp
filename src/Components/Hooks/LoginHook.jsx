import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginHook = (Component) => {
    const ComponentWithHook = (props) => {
        if (!props.isLoading && !props.isAuth) {
            return <Redirect to={'/login'} />
        }

        return (
            <Component {...props} />
        )
    };

    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading
    });
    
    return connect(mapStateToProps, {})(ComponentWithHook)
};

export default LoginHook;