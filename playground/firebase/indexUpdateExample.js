import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDN2JSKJK7DoeX2NUbrEuSswQDJhPeCmZo",
    authDomain: "mevans-todo-app.firebaseapp.com",
    databaseURL: "https://mevans-todo-app.firebaseio.com",
    projectId: "mevans-todo-app",
    storageBucket: "mevans-todo-app.appspot.com",
    messagingSenderId: "627711532766"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Andrew',
      age: 25
    }
  });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed!');
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Michael'
// });

// firebaseRef.child('user').update({
//   name: 'Michael Andrew'
// });
//
// firebaseRef.child('app').update({ name: 'Todo Application' });
