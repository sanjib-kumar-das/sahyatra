// // import firebase from "firebase";
// import firebase from "firebase";
// import { initializeApp } from "firebase/app";

// var firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyAsIhYC-AJQXyeBxwXp-Vr8PuzRvICRcoM",
//   authDomain: "crowdsourcing-udvaban.firebaseapp.com",
//   databaseURL: "https://crowdsourcing-udvaban-default-rtdb.firebaseio.com",
//   projectId: "crowdsourcing-udvaban",
//   storageBucket: "crowdsourcing-udvaban.appspot.com",
//   messagingSenderId: "770232177572",
//   appId: "1:770232177572:web:8586145450cf0bae5a2731",
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsIhYC-AJQXyeBxwXp-Vr8PuzRvICRcoM",
  authDomain: "crowdsourcing-udvaban.firebaseapp.com",
  databaseURL: "https://crowdsourcing-udvaban-default-rtdb.firebaseio.com",
  projectId: "crowdsourcing-udvaban",
  storageBucket: "crowdsourcing-udvaban.appspot.com",
  messagingSenderId: "770232177572",
  appId: "1:770232177572:web:8586145450cf0bae5a2731",
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

var db = app.firestore;

export { db };
