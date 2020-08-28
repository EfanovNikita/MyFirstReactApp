import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainConteiner from './Components/Contentbar/MainContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="wrapper">
            <Header />
            <MainConteiner />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default App;
