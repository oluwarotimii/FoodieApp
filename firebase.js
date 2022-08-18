/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZgb0rbGvLNjGFRPgSYpc6c8yHL1Abn5I',
  authDomain: 'deli-auth.firebaseapp.com',
  projectId: 'deli-auth',
  storageBucket: 'deli-auth.appspot.com',
  messagingSenderId: '218045137635',
  appId: '1:218045137635:web:baeaf60ad7517c816dfbd6',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { auth };
