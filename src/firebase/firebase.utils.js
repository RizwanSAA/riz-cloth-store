import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBe0N3tms33FDHJugukMnIlyiVRH6i3YGA",
  authDomain: "cloth-store-db-1227.firebaseapp.com",
  databaseURL: "https://cloth-store-db-1227.firebaseio.com",
  projectId: "cloth-store-db-1227",
  storageBucket: "cloth-store-db-1227.appspot.com",
  messagingSenderId: "372919935006",
  appId: "1:372919935006:web:8d7a0425b3adc248e5ce0f",
  measurementId: "G-B74180B480"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
