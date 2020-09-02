import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { authUserThunk } from '../../redux/authReducer';
import { connect } from 'react-redux';
import Navbar from '../Leftbar/Navbar';
import Profile from './Profile/Profile';
import Users from './Users/Users';
import style from './MainContainer.module.css';
import Login from '../Login/Login';

class MainContainer extends PureComponent {

    componentDidMount() {
        this.props.authUserThunk();
    }

    render() {
        /*if (this.props.isLoading) {
            return <div>Loading</div>
        }*/
        return (
            <div className={style.main}>
                <Navbar />
                <Route path='/profile/:userId?' render={() => <Profile />} />
                <Route path='/users' render={() => <Users />} />
                <Route path='/login' render={() => <Login />} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading
});

export default connect(mapStateToProps, { authUserThunk })(MainContainer)