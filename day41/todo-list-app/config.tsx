import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9Q4MN6X1I3R4DCYEOG-X6BdKsfpKlk8A",
  authDomain: "todo-list-7d338.firebaseapp.com",
  projectId: "todo-list-7d338",
  storageBucket: "todo-list-7d338.appspot.com",
  messagingSenderId: "974578057562",
  appId: "1:974578057562:web:0cfe70413ec9f37b183363",
  measurementId: "G-CW8Y143PZ9"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase };