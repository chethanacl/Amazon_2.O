import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLKbkDBx-ZY5H1sgrkWGL6Jc9mh7FWjuo",
  authDomain: "fir-da6fb.firebaseapp.com",
  projectId: "fir-da6fb",
  storageBucket: "fir-da6fb.appspot.com",
  messagingSenderId: "762069150461",
  appId: "1:762069150461:web:45004093bae6fe2719ac94",
  measurementId: "G-6ZDL89K343",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
