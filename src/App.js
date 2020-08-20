import React from 'react';
import './App.css';
import Navbar from './Components/Leftbar/Navbar';
import Rightbar from './Components/Rightbar/Rightbar'
import Profile from './Components/Contentbar/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Rightbar />
      <div className="content">
        <Profile />
      </div>
    </div>
  );
}

export default App;
