import React, { Component } from 'react';
import {GlobalStyle} from './style';
import Header from './common/header';
import {FontGlobalStyle} from './statics/iconfont/iconfont.js';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <FontGlobalStyle />
        <Provider store={store}>
        <div>
       		<Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
        </Provider>
      </div>
    );
  }
}

export default App;
