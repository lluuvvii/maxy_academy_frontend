// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5C3CqXXNZL0SgFhHlo87lBvxpnvu4wJ8",
  authDomain: "login-form-91bdb.firebaseapp.com",
  projectId: "login-form-91bdb",
  storageBucket: "login-form-91bdb.appspot.com",
  messagingSenderId: "108278209917",
  appId: "1:108278209917:web:fa212b2e91528bf9ebc014",
  measurementId: "G-96XGWXJC9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

 // Login button event listener
 document.getElementById('loginBtn').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const userData = {
      email,
      password,
    }
  })

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Hide login page and show home page after successful login
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('homePage').style.display = 'block';
    })
    .catch(error => {
      // Log the error during login process
      console.error('Error during login:', error);
    });
});

// Logout button event listener
document.getElementById('logoutBtn').addEventListener('click', function () {
  signOut(auth)
    .then(() => {
      // Show login page and hide home page after logout
      document.getElementById('loginPage').style.display = 'block';
      document.getElementById('homePage').style.display = 'none';
    })
    .catch(error => {
      // Log the error during logout process
      console.error('Error during logout:', error);
    });
});

// Check for authentication state changes
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in, show home page
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
  } else {
    // User is signed out, show login page
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('homePage').style.display = 'none';
  }
});