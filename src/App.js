import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAi5mxMVo389XX2dKBjVqE4vZwwq7jkhGI',
      authDomain: 'manager-f6404.firebaseapp.com',
      databaseURL: 'https://manager-f6404.firebaseio.com',
      projectId: 'manager-f6404',
      storageBucket: 'manager-f6404.appspot.com',
      messagingSenderId: '83862824342'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
