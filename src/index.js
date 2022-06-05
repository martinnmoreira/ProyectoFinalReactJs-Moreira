import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArRRWFU3VW4XRg0MN333bmgMWFV9eEf-E",
  authDomain: "libreria-4406b.firebaseapp.com",
  projectId: "libreria-4406b",
  storageBucket: "libreria-4406b.appspot.com",
  messagingSenderId: "601533920488",
  appId: "1:601533920488:web:90fa87c17b34a31b59455d",
  measurementId: "G-C8P82BKTSG"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//getAnalytics(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
