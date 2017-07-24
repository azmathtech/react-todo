import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from'react-router';

import Main from 'Main';
import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'app/firebase';

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/todos" component={TodoApp} onEnter={requireLogin}></Route>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
