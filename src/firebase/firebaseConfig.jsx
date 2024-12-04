// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// yetkilendirme için gerekli
import {getAuth, GoogleAuthProvider}  from "firebase/auth";

import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUmEymMKDtasA_SX80PGKVQy0SlEGEoXg",
  authDomain: "hi-chat-c46bc.firebaseapp.com",
  projectId: "hi-chat-c46bc",
  storageBucket: "hi-chat-c46bc.appspot.com",
  messagingSenderId: "270658913177",
  appId: "1:270658913177:web:763722a0856eb4667c4908"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// yetkilendirme için kurulum
export const auth = getAuth(app);
// google sağlayıcısı kurulum
export const provider = new GoogleAuthProvider();

// veritabanı kurlumu
export const db = getFirestore(app);