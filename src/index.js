import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ReactDOM from 'react-dom';

import './static/base.css';
import './static/main.css';

import App from './App.js';

import {Works, Start } from './pages/';

ReactDOM.render((
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
        component={Works}
        />

    </Switch>
  </BrowserRouter>),
  document.getElementById('root')
);
