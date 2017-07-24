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

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
  });

  todosRef.push({
    text: 'Todo 1'
  });

  todosRef.push({
    text: 'Todo 2'
  });

  // var notesRef = firebaseRef.child('notes');
  //
  // notesRef.on('child_added', (snapshot) => {
  //   console.log('child_added', snapshot.key, snapshot.val());
  // });
  //
  // notesRef.on('child_changed', (snapshot) => {
  //   console.log('child_changed', snapshot.key, snapshot.val());
  // });
  //
  // notesRef.on('child_removed', (snapshot) => {
  //   console.log('child_removed', snapshot.key, snapshot.val());
  // });

//   var newNoteRef = notesRef.push();
//   newNoteRef.set({
//     text: 'Walk the dog'
//   });
// //this can also be written like:
// var newNoteRef = notesRef.push().set({
//   text: 'Walk the dog'
// });
//push can actually take the object directly as well
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!!'
// });
//
// console.log('Todo id', newNoteRef.key);
