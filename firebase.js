import firebase  from "firebase/app";
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAY_tAaJX2qi-LRC41kJ2OwAC0GthfNCB0",
  authDomain: "delivro-2a296.firebaseapp.com",
  projectId: "delivro-2a296",
  storageBucket: "delivro-2a296.appspot.com",
  messagingSenderId: "394893007466",
  appId: "1:394893007466:web:d5dbbffd7b8bec99504813",
  measurementId: "G-JWVGSF6X79"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export default auth;