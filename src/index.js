import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import thunk from 'redux-thunk'
// import initialStore from './store/reducers/'
import combineReducers from './store/reducers/'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import './static/base.css';
import './static/main.css';

import App from './App.js';
import { Works, Start } from './pages/';

const store = createStore(
  combineReducers,
  // initialStore,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>

        <Route exact
          path='/'
          component={Start}
          />

        <Route
          path='/about'
          render={(props) => <App {...props} extra={{"SomeVar": "Varvar"}} />}
          />

        <Route
          path='/works'
          render={(props) => <Works {...props} extra={{"SomeVar": "Varvar"}} />}
          />

      </Switch>
    </BrowserRouter>
  </Provider>
  ),
  document.getElementById('root')
);
