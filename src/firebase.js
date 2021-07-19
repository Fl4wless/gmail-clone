import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEHpY2TJMEdcsrWHoTO5syfUKAbiAbtQM",
  authDomain: "clone-56d01.firebaseapp.com",
  projectId: "clone-56d01",
  storageBucket: "clone-56d01.appspot.com",
  messagingSenderId: "86951867762",
  appId: "1:86951867762:web:9a60e648657f3017d259eb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
