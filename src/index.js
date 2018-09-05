import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import thunk from 'redux-thunk'
// import initialStore from './store/reducers/'
import combineReducers from './store/reducers/'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import './static/scss/main-styles.css';

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
          path='/works/:slug'
          render={(props) => <Works {...props} initialProps={{"loading": false}} />}
          />

        <Route component={Start} />


      </Switch>
    </BrowserRouter>
  </Provider>
  ),
  document.getElementById('root')
);
