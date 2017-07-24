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
    appProp: {
      appName: 'First app name',
      appVersion: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Andrew',
      age: 40
    }
  }).then(() => {
    console.log('Set worked!');
  }, (e) => {
    console.log('Set failed!');
  });

//Using set attached to the root function will wipe all the database
//firebase.database().ref().set()
//solution is to call the child

firebaseRef.child('user').set({
  name: 'Mike'
})

firebaseRef.child('appProp').set({
    appName: 'Second app name',
    appVersion: '1.0.1'
})
