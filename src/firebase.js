import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtmM0JCtxWOy0QI9sCzq-36Gs2ahFx41Q",
  authDomain: "messenger-clone-7fa27.firebaseapp.com",
  projectId: "messenger-clone-7fa27",
  storageBucket: "messenger-clone-7fa27.appspot.com",
  messagingSenderId: "809928562010",
  appId: "1:809928562010:web:60ea00d767a3336e064f63",
  measurementId: "G-6EMZZB7GGM",
});

const db = firebaseApp.firestore();
export default db;
