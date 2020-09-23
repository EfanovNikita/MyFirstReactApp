import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainConteiner from './Components/Contentbar/MainContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="wrapper">
            <Header />
            <MainConteiner />
            <Footer />
          </div>
        </HashRouter>
      </Provider>
    );
  }
};

export default App;
