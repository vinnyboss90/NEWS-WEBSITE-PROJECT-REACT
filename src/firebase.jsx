import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCgr8Rb6QzR0_4BGCZaodcg-DFTKB73Ms",
    authDomain: "newsapp-53808.firebaseapp.com",
    projectId: "newsapp-53808",
    storageBucket: "newsapp-53808.appspot.com",
    messagingSenderId: "786144857975",
    appId: "1:786144857975:web:6b61dd9302f4a08f631b72",
    measurementId: "G-GPHX5XMZJ2"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
