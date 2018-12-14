import React, { Component } from 'react';
import {GlobalStyle} from './style';
import Header from './common/header';
import {FontGlobalStyle} from './statics/iconfont/iconfont.js';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login'
import Write from './pages/write'
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <FontGlobalStyle />
        <Provider store={store}>		
          <BrowserRouter>
            <div>
                <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write'exact component={Write}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
