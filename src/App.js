import React, { Component } from 'react';
import {GlobalStyle} from './style';
import Header from './common/header';
import {FontGlobalStyle} from './statics/iconfont/iconfont.js';
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <FontGlobalStyle />
        <Provider store={store}>
       		<Header />
        </Provider>
      </div>
    );
  }
}

export default App;
