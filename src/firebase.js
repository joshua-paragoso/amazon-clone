// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpLWv0-4Ldy5o1W7ykG7NailWCsgmYtAg",
  authDomain: "challenge-aca94.firebaseapp.com",
  databaseURL: "https://challenge-aca94.firebaseio.com",
  projectId: "challenge-aca94",
  storageBucket: "challenge-aca94.appspot.com",
  messagingSenderId: "246780174094",
  appId: "1:246780174094:web:c46b488ecf2781f608415f",
  measurementId: "G-RXQ2PRX705"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //initialize database
const auth = firebase.auth(); //gives variable for signing in

export { db, auth};