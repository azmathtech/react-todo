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

// //removes everything in database
// firebaseRef.remove();

//firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0.1',
//   name: null
// });

firebaseRef.update({ isRunning: null });
firebaseRef.child('user/age').remove();
