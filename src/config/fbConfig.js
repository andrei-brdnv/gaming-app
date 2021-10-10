import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import store from "../store";
import { createFirestoreInstance } from "redux-firestore"

var fbConfig = {
    apiKey: "AIzaSyBWEAqL36xmbbjcxH0exSNQLOPFRvEyb98",
    authDomain: "gaming-app-fcc28.firebaseapp.com",
    projectId: "gaming-app-fcc28",
    storageBucket: "gaming-app-fcc28.appspot.com",
    messagingSenderId: "1053115550930",
    appId: "1:1053115550930:web:9c966177d1a2ac5495b10b",
    measurementId: "G-JS9CFP2EHH"
};

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    attachAuthIsReady: true,
    // enableClaims: true // Get custom claims along with the profile
}

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}
// Initialize Firebase
firebase.initializeApp(fbConfig);
// firebase.analytics();
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
