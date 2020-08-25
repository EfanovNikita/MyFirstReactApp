import React from 'react';
import './App.css';
import Navbar from './Components/Leftbar/Navbar';
import Profile from './Components/Contentbar/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './Components/Contentbar/Users/Users';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Navbar />
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/users' render={() => <Users />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
