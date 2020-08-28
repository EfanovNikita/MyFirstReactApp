import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { authUserThunk } from '../../redux/authReducer';
import { connect } from 'react-redux';
import Navbar from '../Leftbar/Navbar';
import Profile from './Profile/Profile';
import Users from './Users/Users';
import style from './MainContainer.module.css';

class MainContainer extends PureComponent {

    componentDidMount() {
        this.props.authUserThunk();
    }

    render() {
        return (
            <div className={style.main}>
                <Navbar />
                <Route path='/profile/:userId?' render={() => <Profile />} />
                <Route path='/users' render={() => <Users />} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { authUserThunk })(MainContainer)