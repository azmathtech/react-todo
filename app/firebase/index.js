import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDN2JSKJK7DoeX2NUbrEuSswQDJhPeCmZo",
      authDomain: "mevans-todo-app.firebaseapp.com",
      databaseURL: "https://mevans-todo-app.firebaseio.com",
      projectId: "mevans-todo-app",
      storageBucket: "mevans-todo-app.appspot.com",
      messagingSenderId: "627711532766"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
