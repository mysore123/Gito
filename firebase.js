import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCAzE0COCAZFzEVutQeC6X9s5BQU-DU_S4",
    authDomain: "aliexpress-clone.firebaseapp.com",
    databaseURL: "https://aliexpress-clone.firebaseio.com",
    projectId: "aliexpress-clone",
    storageBucket: "aliexpress-clone.appspot.com",
    messagingSenderId: "678972324257",
    appId: "1:678972324257:web:2b9a89e10369b135c133e0",
    measurementId: "G-GQZPE17BGH"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};