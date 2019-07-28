import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD6d0Uyx-VaTmULxJonRO5R2dajV5pYLQU",
    authDomain: "photowall-project.firebaseapp.com",
    databaseURL: "https://photowall-project.firebaseio.com",
    projectId: "photowall-project",
    storageBucket: "photowall-project.appspot.com",
    messagingSenderId: "243425047992",
    appId: "1:243425047992:web:f247b77ab57a0fcd"
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  export {database}