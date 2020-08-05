import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDDzvxy4QjNLWNP-NCdqR9A5KNw_BdJzWQ",
    authDomain: "app-user-b38fb.firebaseapp.com",
    databaseURL: "https://app-user-b38fb.firebaseio.com",
    projectId: "app-user-b38fb",
    storageBucket: "app-user-b38fb.appspot.com",
    messagingSenderId: "653943626395",
    appId: "1:653943626395:web:99db407a219f16da0a843e"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;