import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAauhQIclhvlQW6fkuLpr-9ltP-bBnOjwM",
  authDomain: "chatly-5c30e.firebaseapp.com",
  databaseURL: "https://chatly-5c30e-default-rtdb.firebaseio.com",
  projectId: "chatly-5c30e",
  storageBucket: "chatly-5c30e.appspot.com",
  messagingSenderId: "1008977128346",
  appId: "1:1008977128346:web:1030116f13c8256d746823",
  measurementId: "G-BTVL1YQGMR",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
