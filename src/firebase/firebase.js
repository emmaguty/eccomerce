import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwNHgiwc_GOJHCC-BTmiveSFO_PQMiJHU",
  authDomain: "ecommerce-rl.firebaseapp.com",
  projectId: "ecommerce-rl",
  storageBucket: "ecommerce-rl.appspot.com",
  messagingSenderId: "223837739457",
  appId: "1:223837739457:web:c5ff95199eb7fb684f3740",
  measurementId: "G-X0601QCKSN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}