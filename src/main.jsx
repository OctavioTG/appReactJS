import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzO8hkDlgh3jg7xQlvZPpLiZ575eUfp4k",
  authDomain: "reactappcoder-d01a6.firebaseapp.com",
  projectId: "reactappcoder-d01a6",
  storageBucket: "reactappcoder-d01a6.appspot.com",
  messagingSenderId: "516439348982",
  appId: "1:516439348982:web:7603d6868372bcd3fd3ed7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
