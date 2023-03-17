import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY8VOTWba0P6wjLaGwPxmC9FKDPHQnpCE",
  authDomain: "netflix-clone-75b30.firebaseapp.com",
  projectId: "netflix-clone-75b30",
  storageBucket: "netflix-clone-75b30.appspot.com",
  messagingSenderId: "385153652477",
  appId: "1:385153652477:web:210a906dbb8073555d9094",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerF = new FacebookAuthProvider();

export { auth, provider, providerF };
export default provider;
