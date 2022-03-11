import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyCm8f6gJtK3zvxrXrwg4zMpaRQNmTiZ7UQ",
    authDomain: "attentionindex.firebaseapp.com",
    databaseURL: "https://attentionindex-default-rtdb.firebaseio.com",
    projectId: "attentionindex",
    storageBucket: "attentionindex.appspot.com",
    messagingSenderId: "921432105624",
    appId: "1:921432105624:web:ad22c868065f717e6e26ed",
    measurementId: "G-7NW9BM2HG3"
  };
  const app = initializeApp(firebaseConfig);
  export default getFirestore();
 

  