var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

// var Main = require('Main');
// import Login from 'Login';
// import TodoApp from 'TodoApp';
var actions = require('actions');
var store = require('configureStore').configure();
//var TodoAPI = require('TodoAPI');
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

//import './../playground/firebase/index';

//Local Storage
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

//Local storage
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

//Firebase Storage
store.dispatch(actions.startAddTodos());

// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());


// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

//App scss - this requires an additional loader sass
require('style!css!sass!applicationStyles')



ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);



// ReactDOM.render(
//   <TodoApp/>,
//   document.getElementById('app')
// );


// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={TodoApp}>
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );
