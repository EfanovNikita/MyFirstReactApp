import React from 'react';
import './App.css';
import Navbar from './Components/Leftbar/Navbar';
import Rightbar from './Components/Rightbar/Rightbar'
import Profile from './Components/Contentbar/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './Components/Contentbar/Users/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Rightbar />
        <div className="content">
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/users' render={() => <Users />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
