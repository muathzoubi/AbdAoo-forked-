import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFqsglDDkezsxu6AsIrQkNcaI4alElSxc",
  authDomain: "first-97cb5.firebaseapp.com",
  databaseURL: "https://first-97cb5-default-rtdb.firebaseio.com",
  projectId: "first-97cb5",
  storageBucket: "first-97cb5.appspot.com",
  messagingSenderId: "737995060180",
  appId: "1:737995060180:web:9942daf72da7d06a965c41",
  measurementId: "G-KJ9RJ6W707"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
