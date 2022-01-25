import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyAtKHqQaWbes43tMfQhg-UT9fBAFKlJZ6A",
    authDomain: "en-voice.firebaseapp.com",
    projectId: "en-voice",
    storageBucket: "en-voice.appspot.com",
    messagingSenderId: "23432809574",
    appId: "1:23432809574:web:afb1df031aeb0e02a5f1a7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();