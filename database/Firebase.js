import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtfiuIaflJn4_RSPRDIx85cHRa9bRA79Y",
    authDomain: "finalproject-c3584.firebaseapp.com",
    databaseURL: "https://finalproject-c3584.firebaseio.com",
    projectId: "finalproject-c3584",
    storageBucket: "finalproject-c3584.appspot.com",
    messagingSenderId: "869897713014",
    appId: "1:869897713014:web:d403dd27cc9749c8697657"
};

firebase.initializeApp(firebaseConfig);

export default firebase;