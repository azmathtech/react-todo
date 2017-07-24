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

  firebaseRef.child('user').on('value', (snapshot) => {
    console.log('User ref changed', snapshot.val());
  });

  firebaseRef.child('user').update({name: 'Mike'});

  firebaseRef.child('app').update({name: 'Something Else!'});

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value');
// });
//
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got part of the database',snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value');
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// //no arguments turns all listeners off, specifiying only turns off one
// firebaseRef.off('value', logData);
//
// firebaseRef.update({isRunning: false});
